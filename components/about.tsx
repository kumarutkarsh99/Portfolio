import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, Lightbulb, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            Get to know more about my background, skills, and what drives my
            passion for technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-16">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer and Computer Science student
              at IIT Bhubaneswar, driven by a love for building scalable web
              platforms and solving complex technical challenges. From
              developing real-world projects like Applicant Tracking Systems to
              competing in coding contests, I thrive at the intersection of
              software engineering, problem-solving, and continuous learning.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Code className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-900 mb-1">
                  Technical Expertise
                </h3>
                <p className="text-sm text-slate-600">
                  Modern web technologies and best practices
                </p>
              </div>
              <div className="text-center">
                <Lightbulb className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-900 mb-1">
                  Problem Solving
                </h3>
                <p className="text-sm text-slate-600">
                  Creative solutions to complex challenges
                </p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-900 mb-1">
                  Collaboration
                </h3>
                <p className="text-sm text-slate-600">
                  Strong teamwork and communication skills
                </p>
              </div>
            </div>

            {/* <Button className="bg-slate-700 hover:bg-slate-800 text-white">
              <Download className="mr-2 h-4 w-4" />
              View My Resume
            </Button> */}
          </div>

          <div className="space-y-6">
            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Areas of Interest
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li>
                    • Full Stack Web Development (React, NestJS, Django, Flask)
                  </li>
                  <li>• Cloud & Scalable Systems (Vercel, Railway, Render)</li>
                  <li>• Competitive Programming & DSA</li>
                  <li>• Applied Machine Learning (NLP, Bias Detection)</li>
                  <li>• Clean UI/UX and Frontend Optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  What Drives Me
                </h3>
                <p className="text-slate-700">
                  I believe great software is a blend of logic, creativity and
                  impact. Whether building platforms to simplify hiring or
                  experimenting with AI for real-world bias detection, I enjoy
                  turning ideas into practical solutions. Each project fuels my
                  curiosity and sharpens my ability to craft efficient,
                  user-centric technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
