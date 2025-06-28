"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            Get to know more about my background, skills, and what drives my
            passion for technology.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed text-justify">
              I'm a passionate Full Stack Developer and Computer Science student
              at IIT Bhubaneswar, driven by a love for building scalable web
              platforms and solving complex technical challenges. From
              developing real-world projects like Applicant Tracking Systems to
              competing in coding contests, I thrive at the intersection of
              software engineering, problem-solving, and continuous learning.
            </p>

            <motion.div
              className="grid sm:grid-cols-3 gap-6 mb-8"
              variants={container}
            >
              {[
                {
                  Icon: Code,
                  label: "Technical Expertise",
                  desc: "Modern web technologies and best practices",
                },
                {
                  Icon: Lightbulb,
                  label: "Problem Solving",
                  desc: "Creative solutions to complex challenges",
                },
                {
                  Icon: Users,
                  label: "Collaboration",
                  desc: "Strong teamwork and communication skills",
                },
              ].map(({ Icon, label, desc }, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <Icon className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-900 mb-1">{label}</h3>
                  <p className="text-sm text-slate-600">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6" variants={container}>
            {[
              {
                title: "Areas of Interest",
                content: (
                  <ul className="space-y-2 text-slate-700">
                    <li>
                      • Full Stack Web Development (React, NestJS, Django,
                      Flask)
                    </li>
                    <li>
                      • Cloud & Scalable Systems (Vercel, Railway, Render)
                    </li>
                    <li>• Competitive Programming & DSA</li>
                    <li>• Applied Machine Learning (NLP, Bias Detection)</li>
                    <li>• Clean UI/UX and Frontend Optimization</li>
                  </ul>
                ),
              },
              {
                title: "What Drives Me",
                content: (
                  <p className="text-slate-700">
                    I believe great software is a blend of logic, creativity and
                    impact. Whether building platforms to simplify hiring or
                    experimenting with AI for real-world bias detection, I enjoy
                    turning ideas into practical solutions. Each project fuels
                    my curiosity and sharpens my ability to craft efficient,
                    user-centric technology.
                  </p>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1) rounded",
                }}
              >
                <Card className="border-slate-200 shadow-sm transition-shadow duration-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {card.title}
                    </h3>
                    {card.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
