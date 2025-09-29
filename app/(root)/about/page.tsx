'use client';

import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, HeartHandshake, Award, Mail, Sparkles, ArrowRight, Users, Globe } from 'lucide-react';
import { ourStory, howTo, salvationSteps, leaders, whatWeBelieve } from '@/constants';
import { Button } from '@/components/ui/button';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

const splideOptions = {
  type: 'loop',
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  arrows: false,
  pagination: true,
  gap: '1rem',
  focus: 'center',
  perPage: 1,
  breakpoints: {
    768: {
      arrows: false,
    },
  },
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (inView && countRef.current) {
      gsap.fromTo(countRef.current, 
        { textContent: 0 },
        {
          textContent: end,
          duration: duration / 1000,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function() {
            if (countRef.current) {
              countRef.current.textContent = Math.ceil(Number(this.targets()[0].textContent)) + suffix;
            }
          }
        }
      );
    }
  }, [inView, end, duration, suffix]);

  return <span ref={ref}><span ref={countRef}>0{suffix}</span></span>;
};

// Floating Animation Component
const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: delay
      });
    }
  }, [delay]);

  return <div ref={elementRef}>{children}</div>;
};

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero animations
      const tl = gsap.timeline();
      tl.from(".hero-title", { 
        y: 100, 
        opacity: 0, 
        duration: 1.2, 
        ease: "power3.out",
        stagger: 0.2
      })
      .from(".hero-subtitle", { 
        y: 50, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      }, "-=0.6")
      .from(".hero-stats", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.4");

      // Floating orbs animation
      gsap.to(".floating-orb", {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // Section animations
  useGSAP(() => {
    if (storyInView) {
      gsap.from(".story-content", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, [storyInView]);


  return (
    <div className="pt-16 overflow-hidden">
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
      src="/images/hero.JPG"
      alt="Church gathering"
      fill
      priority
      className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute top-20 left-10 w-60 h-60 bg-green-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-yellow-400/20 blur-3xl rounded-full animate-pulse" />


      <div className="relative z-10 text-center text-white max-w-3xl px-4">
      <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
      About <span className="text-green-100">Us</span>
      </h1>
      <p className="hero-subtitle text-lg md:text-xl text-gray-200 leading-relaxed">
      Discover our story, our mission, and the people who make our church family special.
      We are more than a church – we are a community united by God&apos;s love.
      </p>
      </div>
      </section>

      <section ref={storyRef} className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background" />
        <div className="relative max-w-6xl mx-auto">
          <div className="story-content text-center mb-16">
            <h2 className="heading-2 mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto mb-8 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="story-content space-y-8">
              <Card className="p-8 border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">2001</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">The Beginning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      In 2001 God allowed us to start the Church at Noonkopir. We first invited people to come and since we did not have a Church building yet we set stones out in the field to sit on. Our desire was to teach the Word of God and show people how to accept Christ as their Savior.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-green-500 bg-gradient-to-r from-green-500/5 to-transparent">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-green-600">Growing Together</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Now we have nice buildings to use for our Sunday School and Worship services. Even though we have nice facilities our vision has not changed to reach Men and Women and Boys and Girls with the Gospel. We still teach the Word of God and offer Bible based lessons for everyone.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-yellow-500 bg-gradient-to-r from-yellow-500/5 to-transparent">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-yellow-600">Global Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We have had a good history in the past but our desire is to continue reaching people for Christ here in Kenya as well as People in other countries through our Missions Program. Come and Join us at Bible Baptist Church of Noonkopir.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="story-content relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-green-400/20 rounded-2xl blur-xl" />
              <div className="relative">
                <Splide
                  options={splideOptions}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                >
                  {ourStory.map((story, index) => (
                    <SplideSlide key={index}>
                      <div className="relative w-full h-96">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h4 className="text-white font-bold text-2xl mb-3">{story.title}</h4>
                          <p className="text-white/90 text-lg leading-relaxed">{story.description}</p>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-secondary via-background to-secondary/50">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              Our Foundation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto mb-8 rounded-full" />
          </div>

          <Tabs defaultValue="mission" className="mx-auto max-w-4xl">
            <TabsList className="foundation-tab mb-12 grid w-full grid-cols-3 h-14 bg-white/50 backdrop-blur-sm">
              <TabsTrigger value="mission" className="text-lg font-semibold">Mission</TabsTrigger>
              <TabsTrigger value="vision" className="text-lg font-semibold">Vision</TabsTrigger>
              <TabsTrigger value="values" className="text-lg font-semibold">Values</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mission" className="foundation-tab">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-primary/5">
                <CardContent className="p-12 text-center">
                  <FloatingElement>
                    <HeartHandshake className="mb-8 h-20 w-20 text-primary mx-auto" />
                  </FloatingElement>
                  <h3 className="mb-6 text-3xl font-bold text-primary">Our Mission</h3>
                  <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
                    To be a church where every person feels welcomed, loved, and empowered to discover and fulfill their God-given purpose.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vision" className="foundation-tab">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-green-500/5">
                <CardContent className="p-12 text-center">
                  <FloatingElement delay={0.2}>
                    <Award className="mb-8 h-20 w-20 text-green-100 mx-auto" />
                  </FloatingElement>
                  <h3 className="mb-6 text-3xl font-bold text-green-100">Our Vision</h3>
                  <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
                    To be a church where every person feels welcomed, loved, and empowered to discover and fulfill their God-given purpose.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="values" className="foundation-tab">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-yellow-500/5">
                <CardContent className="p-12 text-center">
                  <FloatingElement delay={0.4}>
                    <Heart className="mb-8 h-20 w-20 text-yellow-600 mx-auto" />
                  </FloatingElement>
                  <h3 className="mb-6 text-3xl font-bold text-yellow-600">Our Values</h3>
                  <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
                    Love, Community, Growth, Integrity, and Service guide everything we do as we strive to honor God in all aspects of church life.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
      </section>

      <section className="section-padding bg-gradient-to-br from-background to-secondary/30">
        <div className="text-center mb-20">
          <h2 className="heading-2 mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            What We Believe
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Accordion type="single" collapsible className="space-y-4">
        {whatWeBelieve.map((belief, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={`belief-card border-l-4 ${belief.border} bg-gradient-to-r ${belief.gradient} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
          >
            <AccordionTrigger className="px-6 py-4 text-left text-2xl font-bold text-green-100">
                {belief.title}
              </AccordionTrigger>

              <AccordionContent>
                <div className="px-6 py-4">
              {belief.paragraphs?.map((para, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed text-lg"
                >
                  {para}
                </p>
              ))}

              {belief.list && (
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg pl-4">
                  {belief.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {belief.paragraphs2?.map((para, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed text-lg"
                >
                  {para}
                </p>
              ))}

              {belief.subsections?.map((sub, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-xl font-semibold text-primary">
                    {sub.subtitle}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {sub.content}
                  </p>
                  {sub.verses?.length > 0 && (
                    <p className="text-sm italic text-muted-foreground font-medium">
                      {sub.verses.join(", ")}
                    </p>
                  )}
                </div>
              ))}

              {belief.verses && (
                <p className="text-sm italic text-muted-foreground font-medium">
                  {belief.verses.join(", ")}
                </p>
              )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
        </Accordion>

          <div className="bg-gradient-to-r from-primary/10 to-green-500/10 p-12 rounded-2xl border border-primary/20">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-2xl font-bold text-foreground mb-4">
              "To be a Christian is a God given grace and opportunity to follow God's will & plan for our lives in serving Him on this earth."
            </p>
            <p className="text-lg text-primary font-semibold">
              Romans 12:1-2
            </p>
          </div>
        </div>
      </section>

      <section id="how-to-get-to-heaven" className="section-padding bg-gradient-to-br from-primary/5 via-background to-green-500/5">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              How to Get to Heaven from Kenya
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {howTo.map((item) => (
              <Card key={item.id} className="salvation-step border-0 shadow-xl bg-gradient-to-br from-white to-primary/5 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {item.id}
                    </div>
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />
                  <p className="text-muted-foreground italic text-sm font-medium" dangerouslySetInnerHTML={{ __html: item.verse }} />
                </CardContent>
              </Card>
            ))}
            
            <Card className="salvation-step md:col-span-2 border-0 shadow-xl bg-gradient-to-br from-white to-green-500/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">{salvationSteps.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {salvationSteps.steps.map((step) => (
                    <div key={step.id} className="flex gap-4 p-4 rounded-lg bg-primary/5">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-green-500 flex items-center justify-center text-white font-bold text-sm">
                        {step.id}
                      </div>
                      <p className="text-muted-foreground">
                        {step.text} <span className="italic text-primary font-medium">{step.verse}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-green-500/10 border-primary/20 shadow-2xl">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-4 text-primary">Prayer of Salvation</h3>
                <p className="text-muted-foreground text-lg mb-8">
                  Pray this way: Just close your eyes and bow your head and pray something like this:
                </p>
              </div>
              <blockquote className="border-l-4 border-primary pl-8 py-6 bg-white/80 rounded-r-2xl mb-8 shadow-lg">
                <p className="text-xl italic text-foreground leading-relaxed">
                  "Lord I know that I am a sinner. I know that Jesus is Lord. Please come into my heart and forgive me and save me right now. Thank you very much. Amen."
                </p>
              </blockquote>
              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-500/90 text-white shadow-lg" asChild>
                  <Link href="/contact">
                    Speak with a Pastor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
      </section>

      <section id="leadership" className="section-padding bg-gradient-to-br from-secondary/50 to-background">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            Our Leadership Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {leaders.map((leader, index) => (
            <Card key={index} className="leader-card group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-primary/5">
              <CardContent className="p-0">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Badge className="bg-gradient-to-r from-primary to-green-500 text-white font-semibold">
                      {leader.position}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8 text-center">
                  <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {leader.name}
                  </h4>
                  
                  {leader.email && (
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="group/btn border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-green-500 hover:text-white transition-all duration-300" 
                      asChild
                    >
                      <Link href={`mailto:${leader.email}`}>
                        <Mail className="h-5 w-5 mr-2 group-hover/btn:text-white transition-colors" />
                        Contact
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;