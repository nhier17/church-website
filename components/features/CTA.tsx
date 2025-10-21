"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button } from "@/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
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
    <section className="section-padding bg-gray-50" ref={sectionRef}>
    <div className="text-center">
      <h2 className="heading-2">Ready to Take Your Next Step?</h2>
      <div className="w-24 h-1 my-4 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
      <p className="body-large max-w-2xl mx-auto mb-8">
        Whether you&apos;re new to faith or looking to grow deeper, we&apos;re here to 
        walk alongside you on your spiritual journey.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" asChild size="lg" className="bg-green-100 text-white hover:bg-green-100/80">
          <Link href="/contact">Get Connected</Link>
        </Button>
      </div>
    </div>
  </section>
  )
}

export default CTA