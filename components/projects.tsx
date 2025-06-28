"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "LectureLens",
    headline: "Notes Management System",
    description:
      "A full-stack web platform that enables users to upload, process, and search notes efficiently using OCR and LSA-based summarization.",
    image: "/project2.png",
    tech: ["React", "Flask", "Tesseract OCR", "PostgreSQL"],
    liveUrl: "https://lecturelens-frontend.vercel.app/",
    githubUrl: "https://github.com/kumarutkarsh99/lecturelens_frontend",
  },
  {
    title: "BiasFree",
    headline: "Gender Bias Detection Dashboard",
    description:
      "An interactive dashboard for detecting gender bias in text using transformer-based NLP models with real-time visualizations.",
    image: "/project1.png",
    tech: ["React", "Flask", "BERT", "LSTM"],
    liveUrl: "https://biasfree-frontend.vercel.app/",
    githubUrl: "https://github.com/kumarutkarsh99/biasfree_frontend",
  },
  {
    title: "Applicant Tracking System",
    headline: "Scalable ATS Platform",
    description:
      "A scalable ATS platform with job posting, client onboarding, file uploads, and LinkedIn profile import, built with React, NestJS, and AWS.",
    image: "/project3.png",
    tech: ["React", "NestJS", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate
            my skills and passion for development.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
            >
              <Card className="bg-white border-slate-200 shadow-sm transition-shadow duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">
                    {project.title}
                  </CardTitle>
                  <p className="text-slate-500">{project.headline}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="bg-slate-700 hover:bg-slate-800 text-white flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
