"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export function FadeIn({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
