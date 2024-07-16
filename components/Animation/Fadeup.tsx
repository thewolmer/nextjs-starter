'use client';
import { motion } from 'framer-motion';
import React, { type ReactNode } from 'react';

import { fadeInUp } from '@/lib/animations';

interface Props {
  children: ReactNode;
}
// Animates children

export const FadeUp = ({ children }: Props) => (
  <section>
    <div className="relative w-full overflow-hidden">
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        {children}
      </motion.div>
    </div>
  </section>
);
