"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartHandshake, Laptop, Sparkle } from "lucide-react";

const highlights = [
  {
    title: "Women Empowerment",
    description:
      "Programs and initiatives designed to build confidence, leadership, and independence.",
    icon: HeartHandshake,
  },
  {
    title: "Awareness & Advocacy",
    description:
      "Campaigns and workshops that raise awareness about important women-centered issues.",
    icon: Laptop,
  },
  {
    title: "Community Support",
    description:
      "Creating safe, inclusive, and supportive spaces for women and communities.",
    icon: Sparkle,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65341]">
            What is She Can?
          </p>
          <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">
            Creating opportunities, support systems, and lasting change for
            women.
          </h2>
          <p className="text-base leading-relaxed text-stone-600">
            She Can Foundation is a non-profit organization dedicated to
            empowering women and creating a more equitable society. We provide
            support, resources, and training to women in communities across the
            globe, while raising awareness of women’s issues through advocacy
            campaigns and impactful initiatives.
          </p>
          <p className="text-base leading-relaxed text-stone-600">
            We believe every woman deserves the opportunity to thrive and
            succeed regardless of her background or circumstances. Through
            collaboration, education, and community engagement, we work to
            break down barriers and create lasting positive change.
          </p>
          {/* <div className="space-y-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-stone-100 bg-[#fff7f1] p-4"
                >
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#e26d5a]">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-stone-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -left-4 -top-6 h-24 w-24 rounded-full bg-[#ffe7d5] blur-2xl" />
          <div className="rounded-[28px] border border-white/80 bg-gradient-to-br from-[#fff3ea] via-white to-[#ffe7d6] p-6 shadow-[0_25px_60px_rgba(234,170,140,0.2)]">
            <div className="group overflow-hidden rounded-3xl border border-dashed border-[#f2caba] bg-white/80">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Illustration2.png"
                  loading="eager"
                    priority
                  alt="Community collaboration illustration"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 480px, (min-width: 768px) 420px, 90vw"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
