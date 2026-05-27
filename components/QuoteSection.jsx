"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="bg-[#fff7f1] py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-4xl px-5 md:px-8"
      >
        <div className="rounded-[28px] border border-white/80 bg-gradient-to-br from-white via-[#fff4ec] to-[#ffe7d6] p-8 text-center shadow-[0_25px_60px_rgba(234,170,140,0.2)] md:p-12">
          <p className="text-4xl font-semibold text-[#e26d5a]">“</p>
          <p className="mt-4 text-lg leading-relaxed text-stone-700 md:text-xl">
            Together, we can break down barriers and empower women. At She Can
            Foundation, we believe that if we all do our part, there is no
            challenge too great to overcome. Join us in our mission to create a
            world where every woman has the opportunity to thrive and succeed.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
            — President, She Can Foundation
          </p>
        </div>
      </motion.div>
    </section>
  );
}
