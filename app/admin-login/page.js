"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET;

    if (password && secret && password === secret) {
      Cookies.set("admin-auth", "true", { expires: 1 });
      router.push("/admin");
      return;
    }

    toast.error("Invalid admin password");
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-[#fffaf7] px-5 py-20 md:px-8">
      <Toaster position="top-right" richColors />
      <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white shadow-sm">
            <Image
              src="/SheCan.png"
              alt="She Can Foundation logo"
              fill
              className="object-cover"
              sizes="64px"
              priority
            />
          </span>
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65341]">
              Admin Access
            </p>
            <h1 className="text-3xl font-semibold text-stone-900">
              Authorized personnel only.
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <Card className="border-white/80 bg-gradient-to-br from-white via-[#fff7f1] to-[#ffe8db] shadow-[0_25px_60px_rgba(234,170,140,0.2)]">
            <CardHeader>
              <CardTitle className="text-lg text-stone-900">
                Admin Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium text-stone-700"
                    htmlFor="admin-password"
                  >
                    Password
                  </label>
                  <Input
                    id="admin-password"
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gradient-to-r from-[#e26d5a] to-[#ffb86b] text-white shadow-lg shadow-orange-200/70 hover:from-[#c65341] hover:to-[#f4a353]"
                >
                  {isSubmitting ? "Verifying..." : "Access Dashboard"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
