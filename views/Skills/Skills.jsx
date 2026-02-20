"use client";

import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
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
import Meteors from "@/components/ui/meteors";
import IconCloudDemo from "@/components/globe";


const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      description: "Building responsive and performant user interfaces using modern frontend frameworks and standard web technologies.",
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
      description: "Developing robust server-side logic, managing databases, and creating scalable APIs for modern web applications.",
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
      description: "Implementing smooth animations and highly interactive layouts that enhance user engagement and experience.",
      title: "UI & Animations",
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
    },
    {
      icon: Cloud,
      description: "Managing deployments, cloud infrastructure, and server environments to ensure high availability and scalability.",
      title: "CMS & Hosting",
      color: "text-yellow-400",
      skills: [
        {
          name: "IIS & VPS Hosting",
          icon: <FaCloud className="w-4 h-4 text-[#00BFFF]" />, 
        },
        {
          name: "KVM & Hostinger",
          icon: <FaServer className="w-4 h-4 text-[#FF9800]" />, 
        },
        {
          name: "Docker Deployment",
          icon: <FaDocker className="w-4 h-4 text-[#0db7ed]" />,
        },
        {
          name: "Linux Server",
          icon: <FaLinux className="w-4 h-4 text-[#0db7ed]" />,
        },
      ],
    },
    {
      icon: Cpu,
      description: "Proficient with industry-standard development tools that streamline the coding, testing, and debugging process.",
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
        
        <HoverEffect items={skillCategories} />
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
