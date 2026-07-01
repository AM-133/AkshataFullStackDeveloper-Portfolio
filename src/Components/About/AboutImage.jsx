import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutImage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-90, 0, 90]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  );

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center py-2"
      style={{ perspective: "1800px" }}
    >
      {/* Purple Glow */}

      <div
        className="
          absolute
          h-[480px]
          w-[480px]
          rounded-full
          bg-violet-500/10
          blur-[130px]
          dark:bg-violet-500/25
        "
      />

      {/* Secondary Glow */}

      <div
        className="
          absolute
          h-[320px]
          w-[320px]
          rounded-full
          bg-fuchsia-500/10
          blur-[100px]
          dark:bg-fuchsia-500/20
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          x: -120,
          rotateY: -90,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.4,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -12, 0],
        }}
        whileHover={{
          rotateY: 10,
          rotateX: 5,
          scale: 1.03,
        }}
        className="
          relative
          z-20
          h-[400px]
          w-[330px]
          overflow-hidden
          rounded-[38px]
          border
          border-violet-500/20
          bg-white
          shadow-[0_20px_60px_rgba(15,23,42,0.12)]
          dark:bg-[#171717]
          dark:shadow-[0_25px_70px_rgba(139,92,246,0.25)]
          transition-all
          duration-300
        "
      >
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900"
          alt="About"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div
          className="
            absolute
            inset-0
            rounded-[38px]
            ring-1
            ring-violet-500/20
          "
        />
      </motion.div>
    </div>
  );
}