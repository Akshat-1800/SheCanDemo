"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import SubmissionDetailsModal from "@/components/admin/SubmissionDetailsModal";
import SubmissionTable from "@/components/admin/SubmissionTable";
import SubmissionCard from "@/components/admin/SubmissionCard";

function formatDate(value) {
	if (!value) return "—";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "—";
	return date.toLocaleString("en-IN", {
		dateStyle: "medium",
		timeStyle: "short",
	});
}

function normalizeSubmission(item) {
	return {
		id: item._id || item.id || `${item.email}-${item.createdAt || item.created_at || item.date}`,
		name: item.fullName || item.name || "—",
		email: item.email || "—",
		role: item.role || "—",
		message: item.message || "—",
		createdAt: item.createdAt || item.created_at || item.date || item.created || null,
	};
}

function clipMessage(message, limit = 80) {
	if (!message) return "—";
	if (message.length <= limit) return message;
	return `${message.slice(0, limit).trim()}...`;
}

export default function AdminPage() {
	const [submissions, setSubmissions] = useState([]);
	const [status, setStatus] = useState("loading");
	const [error, setError] = useState("");
	const [visibleCount, setVisibleCount] = useState(5);
	const [selectedSubmission, setSelectedSubmission] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		let isMounted = true;

		const fetchSubmissions = async () => {
			setStatus("loading");
			try {
				const response = await fetch("/api/contact", { cache: "no-store" });
				const data = await response.json();
				const items = Array.isArray(data) ? data : data?.data || [];
				const normalized = items.map(normalizeSubmission).sort((a, b) => {
					const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
					const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
					return dateB - dateA;
				});
				if (isMounted) {
					setSubmissions(normalized);
					setStatus("ready");
				}
			} catch (fetchError) {
				if (isMounted) {
					setError("Unable to load submissions. Please try again.");
					setStatus("error");
				}
			}
		};

		fetchSubmissions();
		return () => {
			isMounted = false;
		};
	}, []);

	useEffect(() => {
		setVisibleCount(5);
	}, [submissions.length]);

	const stats = useMemo(() => {
		const total = submissions.length;
		const volunteers = submissions.filter((item) => item.role === "Volunteer").length;
		const interns = submissions.filter((item) => item.role === "Intern").length;
		const community = submissions.filter((item) => item.role === "Community Member").length;

		return [
			{ label: "Total Submissions", value: total },
			{ label: "Volunteers", value: volunteers },
			{ label: "Interns", value: interns },
			{ label: "Community Members", value: community },
		];
	}, [submissions]);

	const visibleSubmissions = useMemo(
		() => submissions.slice(0, visibleCount),
		[submissions, visibleCount]
	);

	const canViewMore = visibleCount < submissions.length;

	const handleSelect = (submission) => {
		setSelectedSubmission(submission);
		setIsModalOpen(true);
	};

	const handleModalChange = (open) => {
		setIsModalOpen(open);
		if (!open) {
			setSelectedSubmission(null);
		}
	};

	const handleDeleteSubmission = async (submission) => {
		const response = await fetch("/api/contact", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: submission.email }),
		});

		const result = await response.json();
		if (!response.ok || result?.success === false) {
			return false;
		}

		setSubmissions((prev) => {
			const next = prev.filter((item) => item.email !== submission.email);
			setVisibleCount((count) => Math.min(count, next.length));
			return next;
		});

		return true;
	};

	return (
		<main className="min-h-screen bg-[#fffaf7] px-5 pb-16 pt-24 md:px-8">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="space-y-3"
				>
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65341]">
						Admin Dashboard
					</p>
					<h1 className="text-3xl font-semibold text-stone-900 md:text-4xl">
						Manage and review She Can Foundation submissions.
					</h1>
					<p className="text-base text-stone-600">
						Track incoming applications, monitor engagement, and keep the
						community connected.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
				>
					{stats.map((stat) => (
						<Card
							key={stat.label}
							className="border-white/80 bg-white/90 shadow-sm"
						>
							<CardHeader>
								<CardTitle className="text-sm font-medium text-stone-500">
									{stat.label}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-3xl font-semibold text-stone-900">
									{stat.value}
								</p>
							</CardContent>
						</Card>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Card className="border-white/80 bg-white/90 shadow-sm">
						<CardHeader>
							<CardTitle className="text-lg font-semibold text-stone-900">
								Latest Submissions
							</CardTitle>
						</CardHeader>
						<CardContent>
							{status === "loading" && (
								<div className="rounded-2xl border border-dashed border-stone-200 bg-[#fff7f1] p-8 text-center text-sm text-stone-600">
									Loading submissions...
								</div>
							)}

							{status === "error" && (
								<div className="rounded-2xl border border-dashed border-red-200 bg-red-50/80 p-8 text-center text-sm text-red-600">
									{error}
								</div>
							)}

							{status === "ready" && submissions.length === 0 && (
								<div className="rounded-2xl border border-dashed border-stone-200 bg-[#fff7f1] p-8 text-center text-sm text-stone-600">
									No submissions yet. New entries will appear here once forms
									are submitted.
								</div>
							)}

							{status === "ready" && submissions.length > 0 && (
								<>
									<div className="hidden md:block">
										<ScrollArea className="max-h-[420px]">
											<SubmissionTable
												items={visibleSubmissions}
												onSelect={handleSelect}
												clipMessage={clipMessage}
												formatDate={formatDate}
											/>
										</ScrollArea>
									</div>

									<div className="grid gap-4 md:hidden">
										{visibleSubmissions.map((item) => (
											<SubmissionCard
												key={item.id}
												item={item}
												clipMessage={clipMessage}
												formatDate={formatDate}
												onSelect={handleSelect}
											/>
										))}
									</div>

									{canViewMore && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.4 }}
											className="mt-6 flex justify-center"
										>
											<Button
												type="button"
												onClick={() =>
													setVisibleCount((prev) =>
														Math.min(prev + 5, submissions.length)
													)
												}
												className="rounded-full bg-gradient-to-r from-[#e26d5a] to-[#ffb86b] px-6 text-white shadow-lg shadow-orange-200/70 hover:from-[#c65341] hover:to-[#f4a353]"
											>
												View More
											</Button>
										</motion.div>
									)}
								</>
							)}
						</CardContent>
					</Card>
				</motion.div>
			</div>

			<SubmissionDetailsModal
				open={isModalOpen}
				onOpenChange={handleModalChange}
				submission={selectedSubmission}
				onDelete={handleDeleteSubmission}
			/>
		</main>
	);
}
