"use client";

import {
  Award,
  Trophy,
} from "lucide-react";
import Timeline from "@/components/ui/timeline";
import { motion } from "framer-motion";


const EducationSection = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) in Electrical Engineering",
      school: "Institute of Engineering and Rural Technology, Prayagraj",
      mascot: "🎓",
      year: "2019 – 2023",
      achievements: ["CGPA: 7.55"],
      skills: ["Power Systems", "Control Systems", "Machines", "MATLAB"],
      description:
        "Developed strong engineering fundamentals in electrical systems, electronics, and modern tools. Emphasis on practical labs and simulation tools.",
    },
    {
      degree: "Intermediate (12th)",
      school: "Sita Inter College, UP Board",
      mascot: "📗",
      year: "2015-2017",
      achievements: ["Percentage: 90.80%"],
      skills: ["Physics", "Chemistry", "Mathematics", "English"],
      description:
        "Completed higher secondary education with distinction in science stream, demonstrating analytical and mathematical capabilities.",
    },
    {
      degree: "High School (10th)",
      school: "Maharaj Nagar Montessori inter college, UP Board",
      mascot: "📘",
      year: "2013-2015",
      achievements: ["Percentage: 82.33%"],
      skills: ["Mathematics", "Science", "Social Studies", "Hindi"],
      description:
        "Strong academic foundation with consistent performance and focus on general science and core subjects.",
    },
  ];

  const timelineData = educationData.map((edu) => ({
    title: edu.year,
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{edu.mascot}</span>
          <h3 className="text-2xl font-bold text-white">
            {edu.degree}
          </h3>
        </div>
        <p className="text-xl text-teal-500 font-semibold">
          {edu.school}
        </p>
        <p className="text-neutral-300 text-lg leading-relaxed">
          {edu.description}
        </p>
        
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Key Achievements
          </h4>
          <div className="flex flex-wrap gap-2">
            {edu.achievements.map((achievement, i) => (
              <div
                key={i}
                className="px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm border border-teal-500/20"
              >
                <Award className="w-4 h-4" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {edu.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section className="bg-[#04081A]">
      <Timeline 
        data={timelineData} 
        title="Educational Journey"
        description="A chronological look at my academic background and key milestones."
      />
    </section>
  );
};

export default EducationSection;
