import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay, delayChildren: 0.1 } },
});

/** Viewport trigger props for whileInView animations (fires once). */
export const viewportOnce = { once: true, amount: 0.15 } as const;
