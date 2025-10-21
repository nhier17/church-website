"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ministries } from "@/constants";
import { ArrowLeft, Mail, MapPin, Calendar, User } from "lucide-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const splideOptions = {
  type: 'loop',
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  arrows: false,
  pagination: true,
  gap: '1rem',
  focus: 'center',
  perPage: 2,
  breakpoints: {
    768: {
      arrows: false,
      perPage: 1,
    },
  },
};

export default function MinistryDetails() {
  const { id } = useParams();
  const ministry = ministries.find((m) => m.id === id);

  if (!ministry) return notFound();

  return (
    <div className="pt-16">
      <section className="relative h-[60dvh] w-full overflow-hidden">
        <Image
          src={ministry.imageUrl}
          alt={ministry.name}
          fill
          className="object-cover brightness-75 scale-105 animate-heroZoom"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="heading-2 font-bold mb-4 animate-fadeInUp">
            {ministry.name}
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-200 animate-fadeInUp delay-200">
            {ministry.description}
          </p>
        </div>
      </section>

      <section className="section-padding  fade-section">
          <Link
            href="/ministries"
            className="inline-flex items-center text-green-100 hover:text-green-700 mb-6 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Ministries
          </Link>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
            {ministry.name}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {ministry.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <User className="text-green-100" />
              <p>
                <strong>Leader:</strong> {ministry.leader}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-green-100" />
              <p>
                <strong>Meeting Time:</strong> {ministry.meetingTime}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-green-100" />
              <p>
                <strong>Location:</strong> {ministry.location}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-green-100" />
              <p>
                <strong>Contact:</strong> {ministry.contact}
              </p>
            </div>
          </div>
      </section>

      <section className="fade-section py-12 bg-green-50 p-4 border-t border-green-100">
          <h3 className="text-2xl font-semibold mb-4">
            Our Mission
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {ministry.mission}
          </p>
      </section>

      {ministry.activities && ministry.activities.length > 0 && (
        <section className="fade-section py-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-400">
              Ministry Activities
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {ministry.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
        </section>
      )}

      <section className="fade-section section-padding">
          <div className="bg-green-50 rounded-2xl p-8 text-center border border-green-200 dark:border-green-800 shadow-sm">
            <p className="text-xl italic text-green-900 dark:text-green-100 font-medium">
              “{ministry.scripture}”
            </p>
          </div>
      </section>

      {ministry.gallery && ministry.gallery.length > 0 && (
        <section className="section-padding">
          <div className="border-t border-gray-300 dark:border-neutral-700 w-full max-w-5xl mx-auto mb-8" />
          <div className="relative max-w-6xl mx-auto">
            <Splide
              options={splideOptions}
            >
              {ministry.gallery.map((image, index) => (
                <SplideSlide key={index}>
                  <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md group">
                    <Image
                      src={image}
                      alt={`${ministry.name} moment ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </section>
      )}
    </div>
  );
}
