"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    name: "Langages",
    skills: ["Python", "JavaScript", "TypeScript", "C/C++", "Swift", "Go"],
  },
  {
    name: "Frontend & Mobile",
    skills: ["React", "Next.js", "Angular", "HTML", "CSS", "iOS"],
  },
  {
    name: "Backend & Cloud",
    skills: ["Node.js", "Docker", "AWS", "SQL", "Git"],
  },
  {
    name: "IA & Data",
    skills: ["PyTorch", "TensorFlow", "OpenAI"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-sm tracking-[0.3em] uppercase">Compétences</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 gradient-text">Stack Technique</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
