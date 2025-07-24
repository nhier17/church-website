import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Noonkopir Bible Baptist Church
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            For over 25 years, Noonkopir Bible Baptist Church has been a beacon of hope 
            in Springfield. We believe in creating a welcoming environment where 
            people can encounter God's love, grow in their faith, and build 
            meaningful relationships.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our mission is simple: to love God, love people, and serve our community 
            with the grace and compassion of Jesus Christ.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
        <div className="animate-on-scroll">
              <Image
                src="https://images.pexels.com/photos/8468074/pexels-photo-8468074.jpeg"
                alt="Church community"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
      </div>
    </section>
  )
}

export default About