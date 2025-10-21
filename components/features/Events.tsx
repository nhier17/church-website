"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { events } from "@/constants";
import EventsCard from "./EventsCard";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
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
            <h2 className="heading-2 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventsCard key={event.id} event={event} />
            ))}
          </div>

          <div className="text-center mt-6">
            <Button size="lg" className="bg-green-100 text-white hover:bg-green-900" variant="outline" asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
      </section>
  )
}

export default Events