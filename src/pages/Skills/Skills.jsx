import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaCloud,
  FaServer,
  FaLinux,
} from "react-icons/fa";
import {

  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiPostman,
  SiGreensock,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import Meteors from "@/components/ui/meteors";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "JavaScript",
          icon: <SiVite className="w-4 h-4 text-[#F7DF1E]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "PHP",
          icon: <SiFirebase className="w-4 h-4 text-[#8892BE]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "C#",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#9B4F96]" />,
        },
        {
          name: "MySQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#00758F]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
      ],
    },
    {
      icon: Paintbrush,
      title: "UI & Animations (Dev Side)",
      color: "text-purple-400",
      skills: [
        {
          name: "Responsive Layouts",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Framer Motion",
          icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "GSAP",
          icon: <SiGreensock className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "Clean Implementation",
          icon: <BsGrid1X2 className="w-4 h-4 text-white" />,
        },
      ],
      note: "Not a UI/UX designer, but I build responsive and animated interfaces with developer tools like Tailwind, Framer Motion, and GSAP.",
    },
    {
      icon: Cloud,
      title: "CMS & Hosting",
      color: "text-yellow-400",
      skills: [
        {
          name: "IIS & VPS Hosting",
          icon: <FaCloud className="w-4 h-4 text-[#00BFFF]" />, // can swap with server icon
        },
        {
          name: "KVM & Hostinger",
          icon: <FaServer className="w-4 h-4 text-[#FF9800]" />, // KVM VPS (Hostinger type)
        },
        {
          name: "Docker Deployment",
          icon: <FaDocker className="w-4 h-4 text-[#0db7ed]" />,
        },
        {
          name: "Linux Server Management",
          icon: <FaLinux className="w-4 h-4 text-[#0db7ed]" />,
        },
      ],
    },
    {
      icon: Cpu,
      title: "Tools",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "Git",
          icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="w-4 h-4 text-[#F05032]" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      {/* Meteors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={10} />
      </div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
