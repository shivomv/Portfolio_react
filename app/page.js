import Hero from "@/views/Hero/Hero";
import ThreeDMarquee from "@/components/ui/3d-marquee";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HorizontalScroll } from "@/components/ui/horizontal-scroll";
import Image from "next/image";

export default function Home() {
  const marqueeImages = [
    "/projects/themagma.png",
    "/projects/ps.png",
    "/hero.jpg",
    "/hero2.png",
    "/projects/themagma.png",
    "/projects/ps.png",
    "/hero.jpg",
    "/hero2.png",
    "/projects/themagma.png",
    "/projects/ps.png",
    "/hero.jpg",
    "/hero2.png",
  ];

  const horizontalItems = [
    { title: "MERN", url: "/hero.jpg", id: 1 },
    { title: "DevOps", url: "/hero2.png", id: 2 },
    { title: "React", url: "/projects/themagma.png", id: 3 },
    { title: "Design", url: "/projects/ps.png", id: 4 },
    { title: "Logic", url: "/hero.jpg", id: 5 },
    { title: "Scale", url: "/hero2.png", id: 6 },
  ];

  return (
    <main className="bg-[#04081A]">
      <Hero />

      {/* Container Scroll Section */}
      <section className="bg-[#04081A] mb-20 mt-32">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center mb-10 mt-20">
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 tracking-tight text-center">
                Creative <br />
                <span className="text-white md:text-[6rem]">Ecosystem</span>
              </h1>
            </div>
          }
        >
          <div className="w-full h-full relative overflow-hidden bg-[#050505] flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[url('/hero2.png')] bg-cover bg-center opacity-40 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04081A]/40 to-[#04081A]"></div>
            <ThreeDMarquee
              images={marqueeImages}
              className="opacity-90 scale-125"
            />
          </div>
        </ContainerScroll>
      </section>

      {/* Horizontal Scroll Section */}
      <section className="bg-[#04081A] pt-24">
        <div className="container mx-auto px-4 mb-0 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Technical{" "}
            <span className="text-blue-500 underline decoration-blue-500/20">
              Landscape
            </span>
          </h2>
          <p className="text-neutral-500 mt-6 text-lg max-w-xl font-medium">
            Explore the core pillars of my development workflow through this
            interactive showcase.
          </p>
        </div>
        <HorizontalScroll items={horizontalItems} />
      </section>

      <section className="py-12 relative z-50 bg-[#04081A] border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-lg leading-relaxed">
            Combining aesthetics with technical excellence to create memorable
            digital experiences.
          </p>
        </div>
      </section>
    </main>
  );
}
