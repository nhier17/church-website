'use client';

import React, { useState } from 'react'
import MinistryCard from '@/components/features/MinistryCard'
import { ministries } from '@/constants';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Users, ArrowRight } from 'lucide-react';

const Ministries = () => {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);

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

      <section className="section-padding bg-white">
        <div className="text-center mb-12">
          <h2 className="heading-2">Find Your Place to Serve</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry) => (
            <MinistryCard 
              key={ministry.id} 
              ministry={ministry}
              onLearnMore={() => setSelectedMinistry(ministry)}
            />
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-green-100" />
            </div>
            <h2 className="heading-2 mb-6">Find Your Ministry</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"/>
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

      <Dialog open={!!selectedMinistry} onOpenChange={() => setSelectedMinistry(null)}>
        <DialogContent className="max-w-2xl">
          {selectedMinistry && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedMinistry.name}</DialogTitle>
                <DialogDescription>{selectedMinistry.description}</DialogDescription>
              </DialogHeader>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Target Audience:</strong> {selectedMinistry.targetAudience}</p>
                <p><strong>Meeting Time:</strong> {selectedMinistry.meetingTime}</p>
                <p><strong>Location:</strong> {selectedMinistry.location}</p>
              </div>
              {selectedMinistry.imageUrl && (
                <div className="mt-4 w-full h-64 relative">
                  <Image 
                    src={selectedMinistry.imageUrl}
                    alt={selectedMinistry.name}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Ministries
