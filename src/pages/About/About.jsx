import HeroImg from "@/assets/images/hero.jpg";
import hero2 from "@/assets/images/hero2.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section class="py-16 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            {/* Image Section */}
            <div class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  class="rounded-xl object-cover"
                  src={HeroImg}
                  alt="Shivom Verma working"
                />
              </div>
              <img
                class="sm:ml-0 ml-auto rounded-xl object-cover"
                src={hero2}
                alt="Portfolio Snapshot"
              />
            </div>

            {/* Text Section */}
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-center items-start gap-8 flex">
                <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 class="text-gray-500 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Building Future-Ready Solutions Through Code
                  </h2>
                  <p class="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                    Hi, I'm Shivom Verma — a full-stack developer skilled in the
                    MERN stack, C#, MySQL, and Next.js. I build scalable web and
                    mobile applications with clean architecture and modern UI.
                    I'm also passionate about DevOps, with hands-on knowledge of
                    deployment, hosting, and managing KVM-based virtual
                    machines.
                  </p>
                </div>

                <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div class="flex-col justify-start items-start inline-flex">
                    <h3 class="text-gray-400 text-4xl font-bold font-manrope leading-normal">
                      15+
                    </h3>
                    <h6 class="text-gray-400 text-base font-normal leading-relaxed">
                      Real-World Projects
                    </h6>
                  </div>
                  <div class="flex-col justify-start items-start inline-flex">
                    <h4 class="text-gray-400 text-4xl font-bold font-manrope leading-normal">
                      10+
                    </h4>
                    <h6 class="text-gray-400 text-base font-normal leading-relaxed">
                      Technologies Mastered
                    </h6>
                  </div>
                  <div class="flex-col justify-start items-start inline-flex">
                    <h4 class="text-gray-400 text-4xl font-bold font-manrope leading-normal">
                      100%
                    </h4>
                    <h6 class="text-gray-400 text-base font-normal leading-relaxed">
                      Passion & Consistency
                    </h6>
                  </div>
                </div>
              </div>

              <Link
                to="/projects"
                className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex justify-center items-center"
              >
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Explore My Work
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
