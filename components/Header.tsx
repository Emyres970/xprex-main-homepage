"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        duration: 0.8 
      }}
      className="fixed top-0 left-0 right-0 z-50 h-16 w-full border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-black/70 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-500 rounded-lg" />
          <span className="text-xl font-bold tracking-tighter text-white">
            XpreX
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="#" className="hover:text-white transition-colors">Product</Link>
          <Link href="#" className="hover:text-white transition-colors">Features</Link>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
        </nav>

        {/* Action / Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block glass-card px-5 py-1.5 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
            Get Started
          </button>
          
          <button className="p-2 text-white hover:bg-white/5 rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </motion.header>
  );
        }
