"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Github, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Bienvenue, je suis
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          {"YANIS ZEGHICHE".split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.03 }}
              className={letter === " " ? "mr-4" : "gradient-text inline-block"}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-3xl text-gray-400 font-light"
        >
          Software Engineer<span className="mx-3 text-blue-500">|</span>AI Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-gray-500 mt-4 text-lg"
        >
          Mountain View, CA
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mt-12"
        >
          <motion.a href="https://linkedin.com/in/yaniszeghiche" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full" whileHover={{ scale: 1.1 }}>
            <Linkedin className="w-6 h-6 text-gray-400" />
          </motion.a>
          <motion.a href="mailto:yanis@zeghiche.com" className="p-4 glass rounded-full" whileHover={{ scale: 1.1 }}>
            <Mail className="w-6 h-6 text-gray-400" />
          </motion.a>
          <motion.a href="tel:+14152163062" className="p-4 glass rounded-full" whileHover={{ scale: 1.1 }}>
            <Phone className="w-6 h-6 text-gray-400" />
          </motion.a>
          <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full" whileHover={{ scale: 1.1 }}>
            <Github className="w-6 h-6 text-gray-400" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-600" />
      </motion.div>
    </section>
  );
}
