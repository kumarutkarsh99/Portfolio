import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "A1 Selectors",
    location: "Noida, Uttar Pradesh",
    period: "May 2025 - Present",
    description:
      "Contributing to the development of a scalable Applicant Tracking System (ATS) platform with modern web technologies and best practices.",
    achievements: [
      "Developed and integrated job posting and client onboarding modules with file upload and form validation",
      "Built LinkedIn profile import interface with bulk URL parsing and API integration",
      "Collaborated via GitHub using pull request workflows and deployed features to AWS",
    ],
  },
  {
    title: "Secretary, Literary Society",
    company: "IIT Bhubaneswar",
    location: "Bhubaneswar",
    period: "May 2023 - May 2024",
    description:
      "Led a 50+ member team to organize literary and cultural events, enhancing campus engagement and national participation.",
    achievements: [
      "Organized the Annual Literary Fest with 500+ participants from 20+ colleges",
      "Coordinated national initiatives like G20 and Ek Bharat Shreshtha Bharat",
      "Managed logistics and content for 10+ campus events including MUNs and poetry events",
    ],
  },
  // {
  //   title: "Competitive Programming & Open Source",
  //   company: "Personal Initiative",
  //   location: "Online",
  //   period: "2022 - Present",
  //   description:
  //     "Actively practicing problem-solving and building projects to enhance technical expertise and contribute to open-source.",
  //   achievements: [
  //     "Solved 500+ DSA problems on LeetCode, Codeforces, and GeeksforGeeks",
  //     "Ranked in the Top 10 among 300+ teams in the Tredence AI Hackathon",
  //     "Won 1st Prize in S7 National-Level Poetry Writing Competition",
  //   ],
  // },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Experience & Achievements
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey and key accomplishments.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-slate-900 mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-600">
                      <span className="font-medium">{exp.company}</span>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-slate-300 text-slate-700 w-fit"
                  >
                    {exp.period.split(" - ")[1] === "Present"
                      ? "Current"
                      : "Previous"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  {exp.description}
                </p>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-slate-700 text-sm flex items-start"
                      >
                        <span className="text-slate-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
