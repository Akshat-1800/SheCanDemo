"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const roles = ["Volunteer", "Intern", "Community Member"];

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),
  role: z.string().min(1, "Please select a role."),
  message: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters."),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      role: "",
      message: "",
    },
  });

 const onSubmit = async (data) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Form Submitted Successfully 🌱");
      reset();
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};


  return (
    <section id="join" className="bg-white py-28">
      <Toaster position="top-right" richColors />
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65341]">
            Get Involved
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">
            Ready to join the movement?
          </h2>
          <p className="mt-4 text-base text-stone-600">
            Tell us how you would like to participate. Our team will reach out
            with opportunities to learn, volunteer, and create impact.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl"
        >
          <Card className="border-white/80 bg-gradient-to-br from-white via-[#fff7f1] to-[#ffe8db] shadow-[0_25px_60px_rgba(234,170,140,0.2)]">
            <CardHeader>
              <CardTitle>Join Our Community</CardTitle>
              <CardDescription>
                Share a little about yourself and your interests.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="grid gap-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-stone-700" htmlFor="fullName">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    placeholder="Your name"
                    aria-invalid={errors.fullName ? "true" : "false"}
                    className={errors.fullName ? "border-red-300 ring-1 ring-red-200" : ""}
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-stone-700" htmlFor="email">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    className={errors.email ? "border-red-300 ring-1 ring-red-200" : ""}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-stone-700">
                    Role Interested In
                  </label>
                  <Controller
                    name="role"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          aria-invalid={errors.role ? "true" : "false"}
                          className={
                            errors.role ? "border-red-300 ring-1 ring-red-200" : ""
                          }
                        >
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.role && (
                    <p className="text-xs text-red-500">{errors.role.message}</p>
                  )}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-stone-700" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what inspires you..."
                    rows={4}
                    aria-invalid={errors.message ? "true" : "false"}
                    className={errors.message ? "border-red-300 ring-1 ring-red-200" : ""}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-full bg-gradient-to-r from-[#e26d5a] to-[#ffb86b] text-white shadow-lg shadow-orange-200/70 hover:from-[#c65341] hover:to-[#f4a353]"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
