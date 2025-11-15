'use client';

import React, { useState, useRef } from 'react'
import MinistryCard from '@/components/features/MinistryCard'
import { ministries } from '@/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Users, ArrowRight, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const ageGroups = ['All Ages', 'Children', 'Pre-Teens', 'Teens', 'Youth', 'Adults'];
const meetingDays = ['All Days', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Ministries = () => {
   const [searchTerm, setSearchTerm] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All Ages');
  const [selectedDay, setSelectedDay] = useState('All Days');

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

  const filteredMinistries = ministries.filter(ministry => {
    const matchesSearch = ministry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ministry.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesAgeGroup = selectedAgeGroup === 'All Ages' || 
                           (ministry.ageGroup && ministry.ageGroup.toLowerCase().includes(selectedAgeGroup.toLowerCase()));
    
    const matchesDay = selectedDay === 'All Days' ||
                      ministry.meetingTime.toLowerCase().includes(selectedDay.toLowerCase());

    return matchesSearch && matchesAgeGroup && matchesDay;
  });

  return (
    <div className="pt-16">
      <section className="section-padding bg-green-100 text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="heading-2 mb-6">Our Ministries</h1>
          <p className="text-large max-w-3xl mx-auto text-white">
            Find your place to grow, serve, and make a difference. We have ministries 
            for every age and stage of life where you can use your gifts and passions.
          </p>
        </div>
      </section>

     <section ref={sectionRef} className="py-8 bg-secondary/50 border-b">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search ministries..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {ageGroups.map((group) => (
                    <Badge
                      key={group}
                      variant={selectedAgeGroup === group ? "default" : "outline"}
                      className="cursor-pointer hover:bg-green-100 hover:text-primary-foreground transition-colors"
                      onClick={() => setSelectedAgeGroup(group)}
                    >
                      {group}
                    </Badge>
                  ))}
                </div>
              
                <div className="flex flex-wrap gap-2">
                  {meetingDays.slice(0, 4).map((day) => (
                    <Badge
                      key={day}
                      variant={selectedDay === day ? "default" : "outline"}
                      className="cursor-pointer hover:bg-green-100 hover:text-primary-foreground transition-colors"
                      onClick={() => setSelectedDay(day)}
                    >
                      {day}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-muted-foreground">
                Showing {filteredMinistries.length} of {ministries.length} ministries
              </p>
            </div>
          </div>
      </section>

      <section ref={sectionRef} className="section-padding bg-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Find Your Place to Serve</h2>
         <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMinistries.map((ministry) => (
            <MinistryCard 
              key={ministry.id} 
              ministry={ministry}
            />
          ))}
        </div>
      </section>

      <section ref={sectionRef} className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-green-100" />
            </div>
            <h2 className="heading-2 mb-4">Find Your Ministry</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users className="h-12 w-12 text-green-100 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Serve Together</h3>
              <p className="text-muted-foreground">
                Join a team and build meaningful relationships while serving others.
              </p>
            </div>
            
            <div className="text-center">
              <Heart className="h-12 w-12 text-green-100 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Use Your Gifts</h3>
              <p className="text-muted-foreground">
                Discover and develop your God-given talents in a supportive environment.
              </p>
            </div>
            
            <div className="text-center">
              <ArrowRight className="h-12 w-12 text-green-100 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Make Impact</h3>
              <p className="text-muted-foreground">
                See how your service transforms lives and strengthens our community.
              </p>
            </div>
          </div>

          <Button asChild size="lg" className="bg-green-100 hover:bg-green-100/80 text-white">
            <Link href="/contact">
              Get Connected to Ministry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Ministries
