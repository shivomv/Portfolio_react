"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const ThreeDMarquee = ({
  images,
  className,
}) => {
  const [columns, setColumns] = useState([[], [], [], []]);

  useEffect(() => {
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const shuffledImages = shuffleArray(images);
    const cols = [[], [], [], []];
    
    // Distribute shuffled images to columns
    shuffledImages.forEach((img, i) => {
      cols[i % 4].push(img);
    });

    // If some columns are shorter, fill them to keep layout balanced
    const maxLen = Math.max(...cols.map(c => c.length));
    cols.forEach(col => {
      while (col.length < maxLen && shuffledImages.length > 0) {
        col.push(shuffledImages[Math.floor(Math.random() * shuffledImages.length)]);
      }
    });

    setColumns(cols);
  }, [images]);


  return (
    <div
      className={cn(
        "relative h-[40rem] flex flex-col items-center justify-center overflow-hidden bg-[#04081A] px-4 md:px-10",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#04081A] to-transparent z-40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04081A] to-transparent z-40 pointer-events-none" />

      
      <div className="flex items-start gap-4 md:gap-8 [perspective:1000px] [transform-style:preserve-3d] rotate-x-[30deg] rotate-z-[-10deg]">
        {columns.map((col, idx) => (
          <MarqueeColumn key={idx} images={col} idx={idx} />
        ))}
      </div>
    </div>
  );
};

const MarqueeColumn = ({ images, idx }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:gap-8 min-h-screen animate-marquee",
        idx % 2 === 0 ? "direction-normal" : "direction-reverse"
      )}
      style={{
        "--duration": `${20 + idx * 5}s`,
      }}
    >
      {[...images, ...images, ...images].map((img, i) => (
        <div
          key={i}
          className="relative group w-40 md:w-64 h-24 md:h-40 rounded-xl md:rounded-2xl border border-white/[0.1] bg-white/[0.05] overflow-hidden flex-shrink-0"
        >
          <img
            src={img}
            alt="marquee image"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  );
};

export default ThreeDMarquee;
