import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FirstSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-fuchsia-200 to-purple-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 text-center w-[90%] sm:w-[400px] border border-fuchsia-300"
      >
        <h1 className="text-3xl font-bold text-fuchsia-700 mb-4 font-[Pacifico]">
          Here's something special for you 🎁
        </h1>
        <Link to = "/wish">
        <motion.button
        
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-400 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          Click here 
        </motion.button>
          </Link>

        <p className="mt-4 text-fuchsia-600 text-sm font-medium">
          (I promise you’ll love it!)
        </p>
      </motion.div>
      
    </div>
  );
}
