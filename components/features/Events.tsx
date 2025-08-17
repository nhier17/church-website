import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { upcomingEvents } from "@/constants";
import EventsCard from "./EventsCard";

const Events = () => {
  return (
<section className="section-padding">
          <div className="text-center mb-12">
            <h2 className="heading-2">
              Upcoming Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
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