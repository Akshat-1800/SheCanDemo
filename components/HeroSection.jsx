"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection() {
  return (
    <main
      id="home"
      className="relative overflow-hidden bg-hero-animate bg-[linear-gradient(135deg,#fff3e9,#ffe4d6,#fff7e3)]"
    >
      <div className="pointer-events-none absolute left-10 top-12 h-32 w-32 rounded-full bg-[#ffd6c4]/70 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-28 h-40 w-40 rounded-full bg-[#ffe1ad]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#ffd9ec]/60 blur-[90px]" />

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-24 pt-24 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:pt-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="relative z-10 flex flex-col gap-6"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c65341] shadow-sm"
          >
            <Sparkles size={14} />
            Youth-led community impact
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-semibold leading-tight text-stone-900 md:text-5xl"
          >
            Empowering Women Through Awareness, Opportunity &amp; Community Impact
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed text-stone-600 md:text-lg"
          >
            She Can Foundation is a non-profit organization dedicated to
            empowering women, supporting communities, and creating a more
            equitable society through awareness initiatives, education,
            advocacy, and meaningful opportunities.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <Button
              type="button"
              onClick={() =>
                document
                  .getElementById("join")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-gradient-to-r from-[#e26d5a] to-[#ffb86b] px-6 text-white shadow-lg shadow-orange-200/70 hover:from-[#c65341] hover:to-[#f4a353]"
            >
              Join Community
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-stone-200 bg-white/70 px-6 text-stone-700 hover:border-stone-300 hover:bg-white"
              type="button"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="float-slower absolute -left-6 -top-6 h-20 w-20 rounded-3xl bg-white/80 shadow-lg shadow-orange-200/60" />
          <div className="float-slow absolute -right-4 top-12 h-14 w-14 rounded-full bg-[#ffe6d8] shadow-lg shadow-orange-200/40" />
          <div className="float-slower absolute bottom-6 -left-4 h-10 w-10 rounded-full bg-[#ffd6e7] shadow-lg shadow-rose-200/60" />

          <div className="relative z-10 rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-[0_30px_80px_rgba(234,170,140,0.25)]">
            <div className="group overflow-hidden rounded-3xl border border-dashed border-[#f1c8b8] bg-gradient-to-br from-white via-[#fff4ec] to-[#ffe9d5]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Illustration1.png"
                  alt="Youth community illustration"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 520px, (min-width: 768px) 420px, 90vw"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
