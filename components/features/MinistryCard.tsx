import React from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { User, Clock, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface MinistryCardProps {
    ministry: Ministry;
}

const MinistryCard = ({ ministry }: MinistryCardProps) => {
  return (
 <Card key={ministry.id} className="group card-hover overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-secondary/30">
    <div className="relative w-full h-48 overflow-hidden">
      <Image
        src={ministry.imageUrl}
        alt={ministry.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {ministry.ageGroup && (
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {ministry.ageGroup}
          </Badge>
        </div>
      )}
      
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white text-xl font-bold mb-1 group-hover:text-green-300 transition-colors">
          {ministry.name}
        </h3>
      </div>
    </div>
    
    <CardContent className="p-6 space-y-4">
      <p className="text-muted-foreground line-clamp-3 leading-relaxed">
        {ministry.description}
      </p>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="h-4 w-4 text-primary" />
          </div>
          <div>
            <span className="font-medium text-foreground">Leader:</span>
            <span className="text-muted-foreground ml-1">{ministry.leader}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-sm">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="h-4 w-4 text-primary" />
          </div>
          <div>
            <span className="font-medium text-foreground">Meets:</span>
            <span className="text-muted-foreground ml-1">{ministry.meetingTime}</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-3 pt-4">
        <Button asChild className="flex-1 bg-green-100 hover:bg-green-100/80">
          <Link href={`/ministries/${ministry.id}`}>
            Learn More
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
        
        <Button variant="outline" size="sm" asChild>
          <a href={`mailto:${ministry.contact}`}>
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
  )
}

export default MinistryCard