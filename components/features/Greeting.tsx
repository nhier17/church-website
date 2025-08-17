import React from "react";
import {Quote} from "lucide-react";

interface GreetingProps {
  pastorMessage: string;
}

const Greeting = ({ pastorMessage }: GreetingProps) => {
return (
<section className="section-padding">
      <div className=" max-w-4xl mx-auto text-center mb-16">
        <h2 className="heading-2">A Word from Our Pastors</h2>
      </div>    
      <blockquote className="relative border-l-4 border-green-100 pl-20 py-6 bg-secondary rounded-r-lg mb-8">
  <Quote className="absolute top-4 left-4 w-12 h-12 text-green-100" />
  <p 
    dangerouslySetInnerHTML={{ __html: pastorMessage }} 
    className="text-xl md:text-2xl italic text-foreground leading-relaxed relative z-10"
  />
  <Quote className="absolute bottom-4 right-4 w-12 h-12 text-green-100" />
</blockquote>

</section>
    )
}

export default Greeting
