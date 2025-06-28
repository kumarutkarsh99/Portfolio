"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "GraphQL",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "NestJS",
      "Express.js",
      "Flask",
      "Django",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Railway",
      "Tesseract OCR",
      "Jupyter",
      "PyCharm",
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A snapshot of the languages, frameworks and tools I work with to
            build reliable, scalable software solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
            >
              <Card className="border-slate-200 shadow-sm transition-shadow duration-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-slate-900">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h3
            className="text-2xl font-semibold text-slate-900 mb-8"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            Additional Expertise
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Problem Solving",
                desc: "500+ DSA problems solved across LeetCode, Codeforces, and GFG",
              },
              {
                title: "Cloud & Deployment",
                desc: "Experience with Vercel and Railway for scalable deployments",
              },
              {
                title: "Team Collaboration",
                desc: "Hands-on experience with GitHub workflows and agile development",
              },
              {
                title: "Machine Learning",
                desc: "Developed NLP models for bias detection using BERT and LSTM",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-slate-50 rounded-lg transition-shadow"
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <h4 className="font-semibold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
