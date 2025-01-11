import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Gradient Stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-pink-500 to-yellow-300" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-purple-500 to-yellow-300" />

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <div className="text-4xl font-bold mb-2">⏸</div>
        <h1 className="text-2xl">We are working on something...</h1>
        <p className="text-lg mt-2">Give us some time</p>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm cursor-pointer">
        <div>
       <Link href={"https://dejny.eu"}className="cursor-pointer"><p className="cursor-pointer">Dejny.eu</p></Link>
       </div>
      </footer>
    </div>
  );
}
