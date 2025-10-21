"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="text-center mb-12">
        <h2 className="heading-2 mb-4">Moments of Faith & Fellowship</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
      </div>

      <BentoGrid>
        {gallery.map((item, i) => (
          <BentoGridItem
            key={item.id}
            title={
                <div className="absolute bottom-6 left-6 right-6"> 
                <h3 className="text-white text-2xl font-bold mb-2">{item.alt}</h3>
                 </div>
            }
            header={
              <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            }
            className={
            i === 3 || i === 6 ? "md:col-span-2 relative group overflow-hidden rounded-2xl shadow-lg" : ""
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Gallery;
