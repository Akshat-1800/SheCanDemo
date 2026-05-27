"use client";

import { motion } from "framer-motion";
import { BookOpen, Cpu, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Women Empowerment Programs",
    description:
      "Skill-building and leadership initiatives that help women grow with confidence and independence.",
    icon: BookOpen,
  },
  {
    title: "Awareness Campaigns",
    description:
      "Community outreach and awareness programs focused on education, equality, and social impact.",
    icon: Cpu,
  },
  {
    title: "Community Development",
    description:
      "Collaborative initiatives that strengthen communities and create meaningful opportunities for women.",
    icon: Users,
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-[#fffaf6] py-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65341]">
            Our Programs
          </p>
          <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">
            Designed to inspire, educate, and mobilize.
          </h2>
          <p className="max-w-2xl text-base text-stone-600">
            Each program blends learning with action, giving young people a
            supportive pathway to grow their skills while creating measurable
            community impact.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/80 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e7] text-[#e26d5a]">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl font-semibold text-stone-900">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600">
                    {program.description}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="mt-6 w-fit rounded-full border-stone-200 bg-white px-5 text-stone-700 transition group-hover:border-stone-300"
                >
                  Learn More
                </Button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
