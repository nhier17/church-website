import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Heart,Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section className="section-padding">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4">Our Story & Mission</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <div className="overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/about.JPG"
              alt="Church community worship"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-100 text-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years Serving</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-hidden">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            A Place Where Everyone Belongs
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            We believe that church isn't just a building—it's a family. Whether you're 
            taking your first steps in faith or have been walking with Jesus for years, 
            you'll find a warm welcome and genuine community here.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our mission is simple yet profound: to love God wholeheartedly, love people 
            unconditionally, and serve our community with the grace and compassion of Jesus Christ.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-100">100+</div>
              <div className="text-sm text-gray-600">Church Family</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-100">5+</div>
              <div className="text-sm text-gray-600">Ministries</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-green-100 hover:bg-green-900 text-white" asChild>
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-blue-600">
          <CardContent className="p-0">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Authentic Worship</h3>
            <p className="text-gray-600 leading-relaxed">
              Experience meaningful worship that connects your heart to God through 
              both traditional and contemporary expressions of faith.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-green-100">
          <CardContent className="p-0">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-green-100" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Life-Giving Community</h3>
            <p className="text-gray-600 leading-relaxed">
              Build lasting friendships and find support through our small groups, 
              ministries, and community events designed to foster connection.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-orange-600">
          <CardContent className="p-0">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Biblical Teaching</h3>
            <p className="text-gray-600 leading-relaxed">
              Grow in your understanding of God's Word through practical, 
              life-applicable teaching that transforms hearts and minds.
            </p>
          </CardContent>
        </Card>
      </div>
  </section>
  )
}

export default About