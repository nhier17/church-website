"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { leaders } from "@/constants";
import { Badge } from "../ui/badge";

gsap.registerPlugin(ScrollTrigger);

const Leaders = () => {
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
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4">Meet Our Pastors</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {leaders.slice(0, 2).map((leader,index) => (
          <Card key={index} className="card-hover overflow-hidden p-0">
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 text-center">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-foreground mb-2">{leader.name}</h4>
                  <Badge className="bg-green-50 text-green-100 font-semibold text-sm">{leader.position}</Badge>
                </div>
                
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    );
  }

  export default Leaders;