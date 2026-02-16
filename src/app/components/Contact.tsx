"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-sm tracking-[0.3em] uppercase">Contact</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 gradient-text">Travaillons Ensemble</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Mail, label: "Email", value: "yanis@zeghiche.com", href: "mailto:yanis@zeghiche.com" },
            { icon: Phone, label: "Téléphone", value: "+1 (415) 216-3062", href: "tel:+14152163062" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yaniszeghiche", href: "https://linkedin.com/in/yaniszeghiche" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 flex items-center gap-6 hover:bg-white/5 transition-colors"
            >
              <link.icon className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">{link.label}</p>
                <p className="text-lg font-medium">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Prêt à commencer votre projet ?</h3>
          <a
            href="mailto:yanis@zeghiche.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
          >
            <Send className="w-5 h-5" />
            Envoyer un message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
