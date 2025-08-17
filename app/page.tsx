import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import CoreValues from "@/components/features/CoreValues";
import Events from "@/components/features/Events";
import CTA from "@/components/features/CTA";
import Leaders from "@/components/features/Leaders";
import ServiceTimes from "@/components/features/ServiceTimes";
import Greeting from "@/components/features/Greeting";


const pastorMessage = `
Thank you for visiting our online website for Bible Baptist Church of Noonkopir.It's great that you've taken the time to browse our internet home and we hope you like it.
We believe that you would enjoy our physical church services even better. We invite you to be our guest at our services very soon.
Please feel welcome to look at our website and we especially invite you to visit our link <Link href="/about">How to get to heaven from Kenya</Link>. 
Our prayer is that you would consider the Gospel message and accept Jesus Christ as your personal Savior today.
`;

export default function Home() {
  return (
    <>
      <Hero />
      <section className="root-container">
        <ServiceTimes />
        <Greeting pastorMessage={pastorMessage} />
        <Leaders /> 
        <About />
        <CoreValues />  
        <Events />  
        <CTA />
      </section>
    </>
  );
}
