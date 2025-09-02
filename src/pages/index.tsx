import { motion } from "framer-motion";
import Link from "next/link";

// CLEAN + MINIMAL + SLIGHTLY ANIMATED "COMING SOON" PAGE
// - Pure black background for max contrast
// - White text, no gradients
// - Subtle animated glow + pulse on headline
// - Light fade-in for content

export default function ComingSoon() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center bg-black text-white">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mx-6 w-[min(92vw,880px)] text-center"
      >
        {/* Animated glowing title */}
        <motion.h1
          initial={{ textShadow: "0 0 0px rgba(255,255,255,0.5)" }}
          animate={{
            textShadow: [
              "0 0 6px rgba(255,255,255,0.4)",
              "0 0 16px rgba(255,255,255,0.7)",
              "0 0 6px rgba(255,255,255,0.4)",
            ],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Fetaci
        </motion.h1>

        {/* Subtitle fade in */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 text-lg font-medium sm:text-xl md:text-2xl"
        >
          Coming soon.
        </motion.p>

        {/* Tagline fade in later */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-2 text-base text-white/80 md:text-lg"
        >
          We’re crafting something... Stay tuned.
        </motion.p>

        {/* Links fade-in last */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-base md:text-lg"
        >
          <Link
            href="mailto:dejny@dejny.eu"
            className="underline underline-offset-4 hover:opacity-80"
          >
            dejny@dejny.eu{" "}
          </Link>
          <span className="opacity-50">/</span>
          <Link
            href="https://dejny.eu"
            target="_blank"
            className="underline underline-offset-4 hover:opacity-80"
          >
            dejny.eu
          </Link>
        </motion.div>
      </motion.main>

      {/* Keep page one-screen only */}
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
          overflow: hidden;
          background: #000;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
