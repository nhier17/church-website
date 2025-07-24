"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import  { useGSAP } from "@gsap/react";


const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      if (contentRef.current) {
        const timeline = gsap.timeline();
        
        timeline
          .from(contentRef.current.children, {
            duration: 1,
            y: 60,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
          });
      }
    });

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg)` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div ref={contentRef}>
            <p className="text-lg md:text-xl text-blue-200 mb-4 font-medium">
           Noonkopir Bible Baptist Church
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome Home!
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join our loving community where faith comes alive, friendships are formed, and everyone belongs. Experience the transformative power of God's love every Sunday.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="#">Plan your visit</Link>
            </Button>
            
            <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="text-black"
              >
                <Link href="#">Watch Online</Link>
              </Button>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero