"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ badge, title, highlight, description, centered = true, className }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-14", centered && "text-center", className)}
    >
      {badge && (
        <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase text-indigo-400 border border-indigo-500/25 bg-indigo-500/8">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        {title}{" "}
        {highlight && (
          <span className="text-indigo-400">{highlight}</span>
        )}
      </h2>
      {description && (
        <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
