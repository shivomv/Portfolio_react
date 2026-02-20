"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }) => {
  const beamsRef = useRef(null);

  useEffect(() => {
    const beams = beamsRef.current;
    if (!beams) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      beams.style.setProperty("--x", `${x}%`);
      beams.style.setProperty("--y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#04081A]",
        className
      )}

      style={{
        "--x": "50%",
        "--y": "50%",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at var(--x) var(--y), rgba(56, 189, 248, 0.15) 0%, transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      
      {/* Animated Beams */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <Beam delay={0} duration={8} top="20%" />
        <Beam delay={2} duration={10} top="40%" />
        <Beam delay={5} duration={12} top="60%" />
        <Beam delay={1} duration={9} top="80%" />
      </svg>
    </div>
  );
};

const Beam = ({ delay, duration, top }) => {
  return (
    <rect
      x="-100%"
      y={top}
      width="100%"
      height="1"
      fill="url(#beam-grad)"
      className="animate-beam"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
};

export default BackgroundBeams;
