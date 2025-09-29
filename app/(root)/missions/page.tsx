import React from 'react'
import { Globe, Users, Heart, ArrowRight, Church, MapPin, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { currentMissions, localMissions, missionStrategy, joinMisssion } from '@/constants';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

const Missions = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-green-100 text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="heading-2 mb-6">Global Missions</h1>
          <p className="text-large max-w-3xl mx-auto text-primary-foreground/90">
          Our missions and evangelism ministry is committed to carrying the Good News beyond our walls—spreading the gospel of Jesus Christ to other communities and nations.
           From local outreach to international missions, we believe in making disciples and planting churches that transform lives.
          </p>
        </div>
      </section>

      <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Globe className="h-10 w-10 text-primary" />
            </div>
            <h2 className="heading-2">Our Mission Heart</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full my-4" />
            <blockquote className="border-l-4 border-primary pl-8 py-6 bg-secondary rounded-r-lg mb-8">
              <p className="text-xl md:text-2xl italic text-foreground leading-relaxed mb-4">
                "We have had a blessed history of reaching people for Christ, but our desire is to continue 
                expanding God's kingdom here in Kenya and in other nations through our Missions Program."
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through faithful partnerships and dedicated missionaries, we're seeing lives transformed 
                and churches planted across East Africa. Every soul reached is a victory for the Kingdom of God.
              </p>
            </blockquote>
          </div>
      </section>

      <section className="section-padding bg-secondary">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Current Mission Fields</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
            {currentMissions.map((mission) => (
              <Card key={mission.id} className="card-hover overflow-hidden p-0">
                <div className="relative w-full h-56">
                  <Image
                    src={mission.image}
                    alt={`Mission work in ${mission.country}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {mission.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary">
                      {mission.churches} {mission.churches === 1 ? 'Church' : 'Churches'}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{mission.country}</CardTitle>
                    <span className="text-sm text-muted-foreground">Est. {mission.established}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {mission.location}
                  </div>
                  <p className="text-primary font-medium">Led by {mission.leader}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{mission.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      Recent Highlights
                    </h4>
                    <ul className="space-y-2">
                      {mission.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Heart className="h-4 w-4 text-primary" />
                      Current Needs
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mission.needs.map((need, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {need}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
      </section>

     {/* <section className="section-padding">
          <div className="text-start md:text-center mb-16">
            <h2 className="heading-2 mb-4">Local Missions in Kenya</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localMissions.map((mission, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{mission.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{mission.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary font-medium">{mission.frequency}</span>
                    <span className="text-muted-foreground">{mission.volunteers} volunteers</span>
                  </div>
                </CardContent>
              </Card>
            ))}
              </div>
      </section>
*/}
      <section className="section-padding bg-green-100 text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-8">Celebrating God's Faithfulness</h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Church className="h-12 w-12 text-green-400" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold">Tanzania Mission Update</h3>
                  <p className="text-primary-foreground/80">Pastor Peter's Ministry</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl italic leading-relaxed mb-6">
                "We praise God for the incredible progress in Tanzania! Pastor Peter has faithfully 
                served the community, and we're thrilled to announce that a second church has just 
                been opened in the interior regions. More souls are being reached for Christ every day."
              </blockquote>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">2</div>
                  <p className="text-primary-foreground/80">Churches Planted</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                  <p className="text-primary-foreground/80">Years of Ministry</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
                  <p className="text-primary-foreground/80">Lives Transformed</p>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Join the Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {joinMisssion.map((mission) => (
            <Card key={mission.id} className="text-center card-hover">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <mission.icon className="h-8 w-8 text-green-100" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{mission.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {mission.description}
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
           ))}
          </div>
      </section>
      
      <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-8">The Great Commission</h2>
            
            <blockquote className="border-l-4 border-primary pl-8 py-6 bg-secondary rounded-r-lg mb-8">
              <p className="text-xl md:text-2xl italic text-foreground leading-relaxed mb-4">
                "Go ye therefore, and teach all nations, baptizing them in the name of the Father, 
                and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever 
                I have commanded you: and, lo, I am with you always, even unto the end of the world."
              </p>
              <cite className="text-green-100 font-semibold">Matthew 28:19-20</cite>
            </blockquote>
            
            <p className="text-large text-muted-foreground mb-8">
              This is our calling and our privilege. Every believer is called to participate in 
              God's mission to reach the world with the Gospel of Jesus Christ.
            </p>
          </div>
      </section>

      <section className="section-padding bg-secondary">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Mission Strategy</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionStrategy.map((strategy) => (
            <Card key={strategy.id} className="text-center card-hover">
              <CardContent className="pt-8">
                <strategy.icon className="h-12 w-12 text-green-100 mx-auto mb-4" />
                <h3 className= "text-xl font-semibold mb-4">{strategy.title}</h3>
                <p className="text-muted-foreground">
                  {strategy.description}
                </p>
              </CardContent>
            </Card>
          ))}   
          </div>
      </section>

      <section className="section-padding">
          <h2 className="heading-2 md:text-center text-center mb-4">Answer the Call</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full mb-4" />
          <p className="text-large text-muted-foreground max-w-2xl mx-auto mb-8">
            God is calling NBBC Church to be part of His global mission. Whether through 
            prayer, giving, or going, there's a place for you in this great work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-green-100 hover:bg-green-100/80">
              <Link href="/contact">
                Get Involved in Missions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:bg-green-100 hover:text-white">
              <Link href="/giving">
                Support Our Missionaries
                <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
      </section>
    </div>
  )
}

export default Missions