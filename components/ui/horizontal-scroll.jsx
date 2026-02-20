"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const HorizontalScroll = ({ items }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjusted percentage to stop the scroll earlier. 
  // This keeps the last item ("Scale") at the right edge instead of moving off-screen.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-[#04081A]">


      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {items.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ item }) => {
  return (
    <div
      key={item.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-2xl"
    >
      <div
        style={{
          backgroundImage: `url(${item.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg rounded-2xl border border-white/10">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScroll;
