"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          buttonsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // Parallax effect on hero image
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax glow background
      gsap.to(glow1Ref.current, {
        yPercent: -20,
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(glow2Ref.current, {
        yPercent: 20,
        xPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-16 md:pt-16 flex items-center overflow-hidden bg-gradient-to-br from-green-900 via-black to-gray-900"
    >
      <div
        ref={glow1Ref}
        className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"
      />
      <div
        ref={glow2Ref}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"
      />

      <div className="container-custom grid md:grid-cols-2 items-center gap-10 relative z-10">
        <div className="text-white space-y-6">
          <h1
            ref={titleRef}
            className="heading-2"
          >
            Welcome to{" "}
            <span className="text-green-100">
              Noonkopir Bible Baptist Church
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed"
          >
            Join our loving community where faith comes alive, friendships are
            formed, and everyone belongs. Experience the transformative power of
            God's love every Sunday.
          </p>

          <p className="italic text-sm md:text-base text-white/70">
            “Let everything that has breath praise the Lord.” – Psalm 150:6
          </p>
        </div>

        <div
          ref={imageRef}
          className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/hero.JPG"
            alt="Church sanctuary"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div ref={buttonsRef} className="flex gap-4 pb-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-green-100 text-white font-semibold rounded-full shadow-lg hover:bg-green-100/80 transition"
            >
              About NBBC
            </Link>
            <Link
              href="/giving"
              className="px-6 py-3 border border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition"
            >
              Give Now
            </Link>
          </div>
      </div>
    </section>
  );
};

export default Hero;
