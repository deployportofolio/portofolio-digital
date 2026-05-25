"use client";

import { useRef } from "react";
import type { MouseEvent, HTMLAttributes, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  intensity?: number;
}

/** Card that tilts in 3D following the cursor position. Resets on mouse leave. */
export default function TiltCard({
  children,
  className = "",
  intensity = 10,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springCfg = { stiffness: 180, damping: 18 };
  const springX = useSpring(x, springCfg);
  const springY = useSpring(y, springCfg);

  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ perspective: "1000px" }}
      {...props}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
