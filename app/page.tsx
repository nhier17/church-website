import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import CoreValues from "@/components/features/CoreValues";
import Events from "@/components/features/Events";
import CTA from "@/components/features/CTA";
import Leaders from "@/components/features/Leaders";
import Greeting from "@/components/features/Greeting";
import Link from "next/link";

const pastorMessage = (
  <>
    Thank you for visiting our online website for Bible Baptist Church of Noonkopir. It's great that you've taken the time to browse our internet home and we hope you like it.
    We believe that you would enjoy our physical church services even better. We invite you to be our guest at our services very soon.
    Please feel welcome to look at our website and we especially invite you to visit our link{' '}
    <Link href="/about#how-to-get-to-heaven" className="text-green-100 hover:underline">
      How to get to heaven from Kenya
    </Link>. 
    Our prayer is that you would consider the Gospel message and accept Jesus Christ as your personal Savior today.
  </>
);

export default function Home() {
  return (
    <>
      <Hero />
      <section className="root-container">
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
