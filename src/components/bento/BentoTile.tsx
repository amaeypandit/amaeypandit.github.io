"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface BentoTileProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
  delay?: number;
  id?: string;
}

const colSpanClasses = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
};

const rowSpanClasses = {
  1: "row-span-1",
  2: "row-span-2",
};

export function BentoTile({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  delay = 0,
  id,
}: BentoTileProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(
        "bento-tile col-span-1",
        colSpanClasses[colSpan],
        rowSpanClasses[rowSpan],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
