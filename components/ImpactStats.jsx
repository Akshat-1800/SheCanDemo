"use client";

import { motion } from "framer-motion";
import { GraduationCap, Handshake, Megaphone, Users } from "lucide-react";

const stats = [
  {
    label: "Volunteers",
    value: "500+",
    icon: Users,
  },
  {
    label: "Women Reached",
    value: "1200+",
    icon: GraduationCap,
  },
  {
    label: "Awareness Drives",
    value: "80+",
    icon: Megaphone,
  },
  {
    label: "Community Programs",
    value: "25+",
    icon: Handshake,
  },
];

export default function ImpactStats() {
  return (
    <section id="impact" className="bg-[#fff7f1] py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-6xl px-5 md:px-8"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-stone-500">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-stone-900">
                      {stat.value}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#fff0e6] text-[#e26d5a] transition group-hover:scale-105">
                    <Icon size={20} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
