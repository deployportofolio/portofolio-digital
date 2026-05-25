import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

/** Reusable section title with optional chip label and subtitle. */
export default function SectionHeader({
  label,
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col gap-3 ${center ? "items-center text-center" : "items-start"}`}
    >
      {label && (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-1.5 bg-[#0082A6]/10 text-[#0082A6] text-xs font-semibold px-3 py-1.5 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0082A6]" />
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight max-w-2xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`text-base sm:text-lg text-[#1A1A1A]/55 leading-relaxed ${center ? "max-w-xl" : "max-w-lg"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
