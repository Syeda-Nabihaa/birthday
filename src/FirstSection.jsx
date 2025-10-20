import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FirstSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#1e293b] to-[#334155] text-slate-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-lg border border-slate-600 rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.25)] p-10 text-center w-[90%] sm:w-[400px]"
      >
        <h1 className="text-3xl font-bold text-white mb-4 font-[Pacifico]">
          Here's something special for you 🎁
        </h1>

        <Link to="/wish">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-semibold shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all duration-300"
          >
            Click here
          </motion.button>
        </Link>

        <p className="mt-4 text-cyan-400 text-sm font-medium">
          (I promise you’ll love it!)
        </p>
      </motion.div>
    </div>
  );
}
