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
        const timeline = gsap.timeline();
        
        timeline
          .from(statsRef.current.children, {
            duration: 1,
            y: 60,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
          });
      }
    });

  return (
    <section className="section-padding">
          <div className="text-center mb-12">
            <h2 className="heading-2">
              Join Us This Sunday
            </h2>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">9:00 AM</h3>
                <p className="text-gray-600">Bible School Service</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10:00 AM</h3>
                <p className="text-gray-600">Children's Service</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
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