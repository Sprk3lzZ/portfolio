"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-sm tracking-[0.3em] uppercase">À Propos</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 gradient-text">Qui suis-je ?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Passionné par l&apos;innovation technologique, je suis un{" "}
              <span className="text-blue-400 font-semibold">Software Engineer</span>{" "}
              basé à Mountain View, Californie. Actuellement en Master à{" "}
              <span className="text-purple-400 font-semibold">San Francisco State University</span>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Mon parcours à EPITECH Lille et mon expérience internationale m&apos;ont permis
              de développer une approche polyvalente du développement logiciel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Briefcase, value: "3+", label: "Années d'expérience" },
              { icon: GraduationCap, value: "2", label: "Diplômes" },
              { icon: MapPin, value: "2", label: "Pays" },
              { icon: Briefcase, value: "10+", label: "Technologies" },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="text-3xl font-bold gradient-text">{stat.value}</h3>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
