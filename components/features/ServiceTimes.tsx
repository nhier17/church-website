"use client";

import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServiceTimes = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="heading-2">Join us this Sunday</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Card className="bg-white shadow-md border border-border hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-bold text-foreground mb-2">10:00 AM</h3>
            <p className="text-sm text-muted-foreground">Sunday School Service</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md border border-border hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-bold text-foreground mb-2">11:00 AM</h3>
            <p className="text-sm text-muted-foreground">Main Sunday Service</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServiceTimes;
