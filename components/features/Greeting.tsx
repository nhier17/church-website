import React from "react";
import { Quote } from "lucide-react";

interface GreetingProps {
  pastorMessage: React.ReactNode;
}

const Greeting = ({ pastorMessage }: GreetingProps) => {
return (
<section className="section-padding">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4">A Word from Our Pastors</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
      </div>    
      <blockquote className="relative border-l-4 border-green-100 pl-20 py-6 bg-secondary rounded-r-lg mb-8">
  <Quote className="absolute top-4 left-4 w-12 h-12 text-green-100" />
  <p 
    className="text-xl md:text-2xl italic text-foreground leading-relaxed relative z-10"
  >
    {pastorMessage}
  </p>
  <Quote className="absolute bottom-4 ml-4 right-4 w-12 h-12 text-green-100" />
</blockquote>

</section>
    )
}

export default Greeting
