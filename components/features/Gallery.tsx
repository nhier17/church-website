"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { gallery } from "@/constants";
import Link from "next/link";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.map((item) => (
          <Link
            href={item.url}
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
          >
            <div className="relative w-full h-72 sm:h-80">
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-lg sm:text-2xl font-semibold drop-shadow-lg">
                {item.alt}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
