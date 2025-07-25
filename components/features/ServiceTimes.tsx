"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ServiceTimes = () => {
    const statsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      if (statsRef.current) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%', // Trigger when the top of the element reaches 80% from the top of viewport
            toggleActions: 'play none none reverse',
            once: false // Allow animation to replay when scrolling back up
          }
        });

        timeline
          .from(statsRef.current.children, {
            duration: 1,
            y: 40,
            opacity: 0,
            scale: 0.95,
            stagger: 0.15,
            ease: 'power2.out',
            clearProps: 'all' // Ensures better performance after animation completes
          });
      }
    }, { scope: statsRef });

  return (
    <section className="section-padding">
          <div className="text-center mb-12">
            <h2 className="heading-2">
              Join Us This Sunday
            </h2>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">9:00 AM</h3>
                <p className="text-gray-600">Sunday School Services</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">11:00 AM</h3>
                <p className="text-gray-600">Main Service</p>
              </CardContent>
            </Card>
          </div>
    </section>
  )
}

export default ServiceTimes
