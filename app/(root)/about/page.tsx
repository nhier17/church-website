'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HeartHandshake, Award, Heart, Mail, Cross } from 'lucide-react';
import { leaders } from '@/constants';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { ourStory, howTo, salvationSteps } from '@/constants';

const splideOptions = {
  type: 'loop',
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  arrows: true,
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

const About = () => {
  return (
    <section className="section-padding">

      <section className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/images/hero.JPG)` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="heading-2 mb-6">
            About Noonkopir Bible Baptist Church
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover our heart, our story, and the people who make our church family special. We're more than a church - we're a community united by God's love.
          </p>

        </div>
      </section>

      <section className="section-padding">
          <div className="max-w-6xl mx-auto bg-secondary p-4">
            <h2 className="heading-3 mb-8">Our Story</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-large text-muted-foreground">
                <p>
                In 2001 God allowed us to start the Church at Noonkopir.  We first invited people to come and since we did not have a Church building yet we set stones out in the field to sit on.
                Our desire was to teach the Word of God and show people how to accept Christ and their Savior.  
                </p>
                <p>
                Now we have nice buildings to use for our Sunday School and Worship services.
                Even though we have nice facilities our vision has not changed to reach Men and Women and Boys and Girls with the Gospel. 
                We still teach the Word of God and offering Bible based lessons for everyone.   
                </p>
                <p>
                We have had a good history in the past but our desire is to continue reaching people for Christ here in Kenya as well as People in other countries through our Missions Program.
                Come and Join us at Bible Baptist Church of Noonkopir.
                </p>
              </div>
              
              <div className="relative">
                <Splide
                  options={splideOptions}
                  className="p-0 rounded-lg overflow-hidden"
                >
                  {ourStory.map((story, index) => (
                    <SplideSlide key={index}>
                      <div className="relative w-full h-80">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h4 className="text-white font-semibold text-lg mb-2">{story.title}</h4>
                        <p className="text-white/90 text-sm">{story.description}</p>
                      </div>
                    </div>
                  </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </div>
      </section>

      <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 mb-8">Our Foundation</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Learn about the principles that guide our work.
            </p>
          </div>

          <Tabs defaultValue="mission" className="mx-auto max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mission" className="rounded-xl border bg-card p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <HeartHandshake className="mb-6 h-16 w-16 text-green-100" />
                <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
                <p className="max-w-2xl text-lg text-muted-foreground">
                To be a church where every person feels welcomed, loved, and empowered to discover and fulfill their God-given purpose.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="vision" className="rounded-xl border bg-card p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <Award className="mb-6 h-16 w-16 text-green-100" />
                <h3 className="mb-4 text-2xl font-semibold">Our Vision</h3>
                <p className="max-w-2xl text-lg text-muted-foreground">
                To be a church where every person feels welcomed, loved, and empowered to discover and fulfill their God-given purpose.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="values" className="rounded-xl border bg-card p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <Heart className="mb-6 h-16 w-16 text-green-100" />
                <h3 className="mb-4 text-2xl font-semibold">Our Values</h3>
                <p className="max-w-2xl text-lg text-muted-foreground">
                Love, Community, Growth, Integrity, and Service guide everything we do as we strive to honor God in all aspects of church life.
                </p>
              </div>
            </TabsContent>
          </Tabs>
      </section>

      <section className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">What We Believe</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-100">Holy Scriptures</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe that the Holy Bible, as originally written, was verbally inspired and the product of Spirit-controlled men, and therefore, is completely true, without error, in its content. We believe the Bible to be the foundation upon which to establish Christian relationships, and the Supreme standard by which our thoughts and actions are to be tested.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  (II Timothy 3:16-17, II Peter 1:19-20)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-100">Godhead and the Trinity</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We believe that there is only one living and true God, infinite in every excellence; that in the unity of the Godhead there are three (3) distinct personalities - God the Father, God the Son, and God the Holy Spirit - yet one in substance and equal in every divine perfection.
                  </p>
                  <p>
                    We believe in the absolute Deity of the Son, the Lord Jesus Christ; that He was divine as no other man can be, being God the Son of God the Father, existing from all eternity, co-equal with the Father and the Holy Spirit; that He never ceased to be God for one instant and His humiliation did not consist in laying aside His Deity; that to walk on this earth as man, He was miraculously born of the Virgin Mary through the implantation of the Holy Spirit.
                  </p>
                  <p>
                    We believe that the Holy Spirit is a Divine Person, equal with the Father and the Son. The Holy Spirit convicts us of sin and dwells within every believer who accepts God the Son as their Lord and Savior, to bear witness to the truth, teach, guide in life's directions, and comfort in times of need.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground italic mt-4">
                  (Exodus 20:2,3; I Corinthians 8:6; I John 5:7; John 1:1,2; I John 5:20; Matthew 1:20; Luke 1:26-38; II Corinthians 13:14; John 14:16,17; Romans 8:14-27)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-100">Man</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe that man, Adam, was created in innocence, without sin, by God. We further believe that Adam voluntarily, with the influence of Satan through the form of a serpent, fell from his sinless state by disobeying a direct command of God. In consequence, we believe that all mankind are now born in this "prone to sin" state, which results in a sinful nature under condemnation from God without defense or excuse.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  (Genesis 3:1-6; Romans 5:10-19; Romans 1:13; Romans 1:32)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-100">Salvation - New Birth - Justification by Faith - Security of the Believer</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We believe that our acknowledgment of sin in our lives and acceptance of Jesus Christ as Savior based on His finished work on Calvary is the only condition of salvation from sin, and that this salvation is wholly by the Grace of God. We further believe that no works, no matter how good they may appear to be, makes our salvation any more secure.
                  </p>
                  <p>
                    We believe that all who accept Christ as their personal Savior are instantly saved from the penalties of sin, and eternally secure in that salvation.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground italic mt-4">
                  (John 3:1-7; Acts 16:31; Ephesians 2:8-9; Titus 3:5-7; Romans 10:9-13; John 10:28,29; Romans 8:35-39; John 14:1-2)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-100">Local Church</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div>
                    <p className="font-medium mb-2">We believe that a local church is a congregation of baptized believers who profess and proclaim Jesus Christ as their personal Lord and Savior:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Observing the Ordinances set forth by our Lord and Savior Jesus Christ</li>
                      <li>Governed by God's Word</li>
                      <li>Exercising the rights and privileges afforded by the Word of God, and encouraging each other to utilize the gifts provided each of us by our Lord for the benefit of the Church</li>
                    </ul>
                  </div>
                  <p>
                    We believe the true mission of the Church is the faithful witnessing of Christ to all people as we have the opportunity.
                  </p>
                  <p>
                    We believe that the local church has the absolute right of self-government, free from the guidance of any outside hierarchy of individuals or organizations - regardless of how well intended that guidance may be. The local church will decide on matters of membership, of governing policy within the local church, of discipline, and giving. Only the Word of God will provide the guiding direction for this church.
                  </p>
                  <p>
                    We believe it is scriptural for churches of like faith and belief to cooperate with each other in reaching out in the community and in the world to reach those that do not know Jesus Christ as Lord and Savior. Each local church will be their own judge relative to the measure and method of their cooperation.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground italic mt-4">
                  (Acts 2:41,42; I Corinthians 11:2; Ephesians 1:22,23; Ephesians 4:11; Acts 20:27,28; Colossians 1:18; I Timothy 3:1-15; Ephesians 5:22,23; Acts 15:13-18)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-100">Last Things</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pre-tribulation/Pre-millennial Return of Christ and Millennial Reign of Christ</h4>
                    <p>
                      We believe in the bodily, personal, pre-tribulation/pre-millennial return of Jesus Christ to the earth; that He will come before the seven year tribulation period to meet in the air all those who have accepted Him as their personal Lord and Savior - whether living or dead. Further, Christ will come with His church at the close of the tribulation period to judge all the nations then on earth and to set up His kingdom on earth.
                    </p>
                    <p className="text-sm italic mt-2">
                      (I Thessalonians 4:13-18; Matthew 25:31-46; Revelation 19:11-21)
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Eternal Destiny</h4>
                    <p>
                      We believe in a literal Heaven; a place being prepared by God; a place of true joy and bliss; a place for all who have accepted Christ as their personal Savior to look forward to spend their eternity with Him in Heaven.
                    </p>
                    <p>
                      Further, we believe in a literal Hell, with real flames; a place prepared for the eternal punishment of Satan and his angels; a place of eternal torment and pain; a place where those who do not accept Jesus Christ as their personal Savior will be cast following Christ's Millennial reign and their ultimate verdict at the Great White Throne of Judgment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center bg-primary/5 p-8 rounded-lg">
              <p className="text-lg font-medium text-foreground mb-2">
                "To be a Christian is a God given grace and opportunity to follow God's will & plan for our lives in serving Him on this earth."
              </p>
              <p className="text-sm text-muted-foreground italic">
                Romans 12:1-2
              </p>
            </div>
          </div>
      </section>

      <section className="section-padding bg-secondary">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cross className="h-10 w-10 text-green-100" />
              </div>
              <h2 className="heading-2 mb-6">How to Get to Heaven from Kenya</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {howTo.map((item) => (
             <Card key={item.id}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-100">{item.id}. {item.title}</h3>
                <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: item.description }} />
                <p 
                  className="text-muted-foreground italic text-sm"
                  dangerouslySetInnerHTML={{ __html: item.verse }}
                />
              </CardContent>
            </Card>
              ))}
              <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 text-green-100">{salvationSteps.title}</h3>
                <div className="space-y-2">
                  {salvationSteps.steps.map((step) => (
                    <div key={step.id} className="space-y-2">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-100 font-semibold">
                          {step.id}.
                        </div>
                        <p className="text-muted-foreground">
                          {step.text} <span className="italic text-foreground">{step.verse}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Prayer of Salvation</h3>
              <p className="text-muted-foreground mb-6">
                Pray this way: Just close your eyes and bow your head and pray something like this:
              </p>
              <blockquote className="border-l-4 border-green-100 pl-6 py-4 bg-white rounded-r-lg mb-6">
                <p className="text-lg italic text-foreground leading-relaxed">
                  "Lord I know that I am a sinner. I know that Jesus is Lord. Please come into my heart and forgive me and save me right now. Thank you very much. Amen."
                </p>
              </blockquote>
            </div>
          </div>
      </section>

      <section id="leadership" className="section-padding">
          <div className="text-center mb-12">
            <h2 className="heading-2">
              Our Leadership Team
            </h2>
          </div>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader,index) => (
            <Card key={index} className="card-hover overflow-hidden p-0">
               <CardContent className="p-0">
                 <div className="relative h-64 overflow-hidden">
                   <Image
                     src={leader.image}
                     alt={leader.name}
                     fill
                     className="object-cover transition-transform duration-300 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                 </div>
                 
                 <div className="p-6 text-center">
                   <div className="mb-4">
                     <h4 className="text-xl font-bold text-foreground mb-2">{leader.name}</h4>
                       <Badge className="bg-green-50 text-green-100 font-semibold text-sm">{leader.position}</Badge>
                   </div>
                   
                   <p className="text-muted-foreground leading-relaxed mb-6">
                     {leader.bio.substring(0, 120)}...
                   </p>
                   
                   {leader.email && (
                     <Button variant="outline" size="sm" className="group" asChild>
                       <Link href={`mailto:${leader.email}`}>
                         <Mail className="h-4 w-4 mr-2 group-hover:text-green-100 transition-colors" />
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
    </section>
  )
}

export default About