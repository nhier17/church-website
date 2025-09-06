import React from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';

interface MinistryCardProps {
    ministry: Ministry;
    onLearnMore: () => void;
}

const MinistryCard = ({ ministry, onLearnMore }: MinistryCardProps) => {
  return (
    <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="relative overflow-hidden rounded-t-lg w-full h-64">
            <Image 
            src={ministry.imageUrl} 
            alt={ministry.name} 
            fill 
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      
        <div className="p-6 bg-white shadow-lg rounded-b-lg">
        <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">
          {ministry.name}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {ministry.description}
        </p>

        <Button 
          className="w-full bg-green-100 hover:bg-green-900"
          onClick={onLearnMore}
        >
          Learn More
        </Button>
        </div>
    </div>
  )
}

export default MinistryCard