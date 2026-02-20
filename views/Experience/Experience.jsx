import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const ExperienceCard = ({
  title,
  company,
  companyUrl,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
    <div className="relative bg-neutral-900/80 border border-white/5 p-8 rounded-2xl h-full backdrop-blur-xl">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm font-medium text-neutral-500">{period}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <a 
            href={companyUrl} 
            target="_blank" 
            className="text-blue-400/80 hover:text-blue-400 font-semibold text-sm tracking-wide uppercase transition-colors"
          >
            {company}
          </a>
        </div>

        <p className="text-neutral-400 leading-relaxed text-sm md:text-base flex-grow">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "PHP Developer",
      company: "Remote",
      period: "2022",
      description:
        "Architected core backend modules and optimized database performance for various remote PHP projects. Integrated complex third-party APIs and ensured high availability through clean modular coding practices.",
    },
    {
      icon: Layers,
      title: "Full Stack Developer",
      company: "Chandrakala University pvt. ltd.",
      companyUrl: "https://chandrakala.co.in/",
      period: "2023 - present",
      description:
        "Leading development of university management systems. Combining Laravel's robust backend with React's dynamic frontend. Engineered real-time analytics dashboards and significantly improved system security protocols.",
    },
  ];

  return (
    <section className="min-h-screen py-24 relative overflow-hidden bg-[#04081A]">
      <BackgroundBeams className="opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-4 text-center">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Timeline</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-8"></div>
          <p className="text-neutral-400 text-lg text-center max-w-2xl font-medium px-4">
            Digital craftsmanship through years of engineering excellence and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

