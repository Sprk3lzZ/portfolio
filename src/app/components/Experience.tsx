"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Teacher Assistant & AI Researcher",
    company: "San Francisco State University",
    period: "Fév 2026 - Présent",
    description: "Enseignement des cours de Master en IA et Systèmes d'Information.",
  },
  {
    title: "Founder",
    company: "Blinky - AI-powered platform",
    period: "Mar 2025 - Présent",
    description: "Fondateur d'une web app IA automatisant le marketing client.",
  },
  {
    title: "Software Developer Intern",
    company: "Socianova",
    period: "Sep 2024 - Juil 2025",
    description: "Optimisation des performances web de 30% via AngularJS.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-sm tracking-[0.3em] uppercase">Parcours</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 gradient-text">Expérience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-purple-400 font-medium">{exp.company}</p>
              <p className="text-gray-400 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
