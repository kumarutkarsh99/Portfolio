import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A snapshot of the languages, frameworks and tools I work with to
            build reliable, scalable software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-slate-900">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Expertise Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">
            Additional Expertise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">
                Problem Solving
              </h4>
              <p className="text-sm text-slate-600">
                500+ DSA problems solved across LeetCode, Codeforces, and GFG
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">
                Cloud & Deployment
              </h4>
              <p className="text-sm text-slate-600">
                Experience with Vercel and Railway for scalable deployments
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">
                Team Collaboration
              </h4>
              <p className="text-sm text-slate-600">
                Hands-on experience with GitHub workflows and agile development
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">
                Machine Learning
              </h4>
              <p className="text-sm text-slate-600">
                Developed NLP models for bias detection using BERT and LSTM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
