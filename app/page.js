"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Glow Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Hello XpreX
        </h1>
        <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-md mx-auto">
          The next evolution of your digital workflow starts here.
        </p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <button className="glass-card px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all border border-white/10">
            Explore Documentation
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
    }
