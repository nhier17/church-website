"use client";

import React, { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { events } from "@/constants";
import EventsCard from "./EventsCard";
import { isUpcomingEvent } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Filter upcoming events
  const upcomingEvents = useMemo(() => {
    return events
      .filter((event) => isUpcomingEvent(event.date))
      .sort((a, b) => {
        const startA = new Date(a.date.split(" - ")[0]).getTime();
        const startB = new Date(b.date.split(" - ")[0]).getTime();
        return startA - startB;
      })
      .slice(0, 3); // Limit to 3 events for homepage
  }, []);

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

      {upcomingEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <EventsCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          No upcoming events at the moment. Please check back soon.
        </p>
      )}

      <div className="text-center mt-6">
        <Button
          size="lg"
          className="bg-green-100 text-white hover:bg-green-900"
          variant="outline"
          asChild
        >
          <Link href="/events">View All Events</Link>
        </Button>
      </div>
    </section>
  );
};

export default Events;