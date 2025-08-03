import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import CoreValues from "@/components/features/CoreValues";
import Events from "@/components/features/Events";
import CTA from "@/components/features/CTA";
import Leaders from "@/components/features/Leaders";
import ServiceTimes from "@/components/features/ServiceTimes";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="root-container">
        <ServiceTimes />
        <Leaders />
        <About />
        <CoreValues />  
        <Events />  
        <CTA />
      </section>
    </>
  );
}
