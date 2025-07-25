"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategoryColor } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface EventCardProps {
    event: EventData;
}

const EventsCard = ({ event }: EventCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      if (cardRef.current) {
        gsap.fromTo(cardRef.current, 
          { 
            y: 40, 
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            clearProps: 'all', // Ensures better performance after animation completes
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 80%', // Trigger slightly earlier for a smoother experience
              toggleActions: 'play none none reverse',
              once: false // Allow animation to replay when scrolling back up
            }
          }
        );
      }
    }, { scope: cardRef });

  return (
    <div ref={cardRef} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

        <div className="relative overflow-hidden rounded-t-lg w-full h-64">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute top-4 left-4">
            <Badge className={getCategoryColor(event.category)}>
              {event.category}
            </Badge>
          </div>
        </div>

      <div className="p-6 bg-white shadow-lg rounded-b-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {event.description}
        </p>

        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="pt-4">
        {event.registrationUrl && (
          <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
            <a href={event.registrationUrl}>
              Register Now
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        )}
      </div>
      </div>
    </div>
  )
}

export default EventsCard
