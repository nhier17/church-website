'use client';

import React, { useState } from 'react'
import MinistryCard from '@/components/features/MinistryCard'
import { ministries, ageGroups } from '@/constants';
import { getMinistryIcon } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Ministries = () => {
    const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);

  return (
    <div className="pt-16">

        <section className="section-padding bg-green-100 text-primary-foreground">
            <div className="container-custom text-center">
                <h1 className="heading-3 mb-6">Our Ministries</h1>
                <p className="text-large max-w-3xl mx-auto text-gray-300">
                    Find your place to grow, serve, and make a difference. We have ministries 
                    for every age and stage of life where you can use your gifts and passions.
                </p>
            </div>
        </section>

        <section className="section-padding bg-white">
          <div className="md:text-start text-center mb-12">
            <h2 className="heading-2">
              Find Your Place to Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => (
              <MinistryCard 
                key={ministry.id} 
                ministry={ministry}
                icon={getMinistryIcon(ministry.name)}
                onLearnMore={() => setSelectedMinistry(ministry)}
              />
            ))}
          </div>
        </section>

        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Something for Every Age
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {ageGroups.map((ageGroup) => {
                const Icon = ageGroup.icon;
            return (
            <Card key={ageGroup.id} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className={cn(`w-16 h-16 ${ageGroup.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`)}>
                <Icon className={cn(`h-8 w-8 ${ageGroup.iconColor}`)} />
                </div>
                <h3 className="font-semibold mb-2">{ageGroup.title}</h3>
                <p className="text-sm text-foreground">{ageGroup.description}</p>
              </CardContent>
            </Card>
            )})}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ministry Spotlight: Missions/Evangelism
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Our missions and evangelism ministry is committed to carrying the Good News 
          beyond our walls—spreading the gospel of Jesus Christ to other communities 
          and nations. From local outreach to international missions, we believe in 
          making disciples and planting churches that transform lives.
        </p>
        <ul className="space-y-3 text-gray-600 mb-8">
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span>Active community outreach programs in Noonkopir and surrounding areas</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span>Ongoing mission work in Tanzania—planting and supporting new churches</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span>Training and equipping members for evangelism and discipleship</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span>Partnerships with other ministries to reach unreached communities</span>
          </li>
        </ul>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          <Link href="/missions" className="text-white">
            Support Our Missions Work
          </Link>
        </Button>
      </div>
      <div className="relative w-full h-64">
        <Image
          src="/images/missions.jpg"
          alt="Missions and Evangelism"
          fill
          className="object-cover rounded-lg shadow-xl"
        />
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Ministries