"use client";

import { useRef } from "react";
import gsap from "gsap";
import  { useGSAP } from "@gsap/react";

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      if (contentRef.current) {
        const timeline = gsap.timeline();

        // Create a smoother, more sophisticated animation sequence
        timeline
          .from(contentRef.current.children, {
            duration: 1.2,
            y: 40,
            opacity: 0,
            scale: 0.95,
            stagger: 0.15,
            ease: 'power2.out',
            clearProps: 'all' 
          });
      }
    }, { scope: contentRef });

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/images/hero.JPG)` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div ref={contentRef}>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome Home!
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join our loving community where faith comes alive, friendships are formed, and everyone belongs. Experience the transformative power of God's love every Sunday.
          </p>

        </div>
      </div>
    </section>
  )
}

export default Hero
