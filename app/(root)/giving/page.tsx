"use client";

import React, { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Building, Copy } from 'lucide-react';
import { whyWeGive } from '@/constants';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { toast } from 'sonner';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Giving = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

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

  return (
    <div className="pt-16">
      <section className="section-padding bg-green-100 text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="heading-2 mb-6">Generous Giving</h1>
          <p className="text-large max-w-3xl mx-auto text-primary-foreground/90">
            Your generosity helps us share God&apos;s love, support our community, 
            and make a lasting impact both locally and globally. 
            Every gift counts and changes lives!
          </p>
        </div>
      </section>
  
      <section ref={sectionRef} className="section-padding">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Why We Give</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyWeGive.map((item, index) => (
            <Card key={index} className="text-center card-hover">
              <CardContent className="pt-8">
                <item.icon className="h-12 w-12 text-green-100 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section ref={sectionRef} className="section-padding bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Ways You Can Give</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto p-4">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-green-100" />
                Mobile Money (M-Pesa)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Send your gift directly via M-Pesa Paybill or Phone Number.
              </p>
              <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                <span className="font-semibold">0722 955 570</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => copyToClipboard("0722955570")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Account Name: <span className="font-medium">Pastor Andrew</span>
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-green-100" />
                Bank Transfer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Deposit directly into our church account at Equity Bank.
              </p>
              <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/pay.jpg" 
                  alt="Bank details for Noonkopir Bible Baptist Church"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
};

export default Giving;
