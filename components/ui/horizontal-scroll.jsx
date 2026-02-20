"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export const HorizontalScroll = ({ items }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [endX, setEndX] = useState("-55%");

  useEffect(() => {
    const updateEndX = () => {
      if (window.innerWidth < 768) {
        // Mobile: 6 items * 300px = 1800px. Screen ~375px. 
        // We need to move about 1400px. 1400/1800 = 77%
        setEndX("-82%");
      } else {
        setEndX("-55%");
      }
    };
    updateEndX();
    window.addEventListener("resize", updateEndX);
    return () => window.removeEventListener("resize", updateEndX);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", endX]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-[#04081A]">
      <div className="sticky top-0 flex h-screen items-start md:items-center pt-14 md:pt-0 overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-4 md:px-10">
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
      className="group relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] shrink-0 overflow-hidden bg-neutral-200 rounded-2xl"
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
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 md:p-8 text-4xl md:text-6xl font-black uppercase text-white backdrop-blur-lg rounded-2xl border border-white/10 text-center mx-4">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScroll;
