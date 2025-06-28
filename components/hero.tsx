"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
              <Image
                src="/photo1.jpg"
                alt="Profile picture"
                width={256}
                height={256}
                className="rounded-full object-cover shadow-lg"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-semibold text-slate-900 mb-4"
          >
            Kumar Utkarsh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto"
          >
            Full Stack Developer | Coding Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a Computer Science student at IIT Bhubaneswar with a strong
            foundation in full-stack development and problem-solving. I enjoy
            building modern web applications, working on real-world projects,
            and tackling challenging coding problems. Currently honing my skills
            with a keen interest in creating impactful software solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-lg transition-all duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="mx-auto h-6 w-6 text-slate-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
