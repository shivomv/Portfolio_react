import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

const HeroImg = "/hero.jpg";
const hero2 = "/hero2.png";

export default function About() {
  return (
    <section className="py-12 relative overflow-hidden bg-[#04081A] flex items-center">

      <BackgroundBeams className="opacity-40" />

      
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative group lg:order-first order-last">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl blur-2xl group-hover:opacity-100 transition duration-1000"></div>
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform transition hover:scale-[1.02] duration-500 mt-12">
                  <Image
                    className="object-cover"
                    src={HeroImg}
                    alt="Shivom Verma"
                    width={500}
                    height={600}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform transition hover:scale-[1.02] duration-500">
                  <Image
                    className="object-cover"
                    src={hero2}
                    alt="Project Snapshot"
                    width={500}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col space-y-10 items-center lg:items-start text-center lg:text-left">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Future-Ready</span> Solutions
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
                I'm Shivom Verma, a full-stack architect specializing in high-performance web systems. 
                From the internal logic of <span className="text-blue-400">MERN</span> and <span className="text-blue-400">Next.js</span> to the robust deployments of <span className="text-blue-400">DevOps</span>, 
                I bridge the gap between complex engineering and aesthetic design.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
              {[
                { val: "15+", label: "Real-World Projects" },
                { val: "10+", label: "Technologies Mastered" },
                { val: "100%", label: "Passion & Logic", className: "col-span-2 md:col-span-1" },
              ].map((stat, i) => (
                <div key={i} className={stat.className || ""}>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-1 tracking-tighter">
                    {stat.val}
                  </h3>
                  <p className="text-neutral-500 text-xs md:text-sm font-medium uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-3 rounded-full bg-blue-600 text-white font-semibold transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 group"
            >
              <span>Explore My Work</span>
              <svg 
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

