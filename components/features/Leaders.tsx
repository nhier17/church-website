import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Mail,ArrowRight } from "lucide-react";
import Image from "next/image";
import { leaders } from "@/constants";
import { Badge } from "../ui/badge";

const Leaders = () => {
  return (  
    <section className="section-padding">
      <div className="text-center mb-16">
        <h2 className="heading-2">Meet Our Pastors</h2>
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
      
      <div className="text-center mt-12">
        <Button variant="outline" asChild size="lg" className="bg-green-100 text-white hover:bg-green-900">
          <Link href="/about">
            Meet All Our Leaders
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
    );
  }

  export default Leaders;