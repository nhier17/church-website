"use client";

import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { addressInfo, faqs } from "@/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const Contact = () => {

  return (
    <div className="section-padding">
    <section className="relative py-16">
      <div className="absolute inset-0 z-0 bg-green-100">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1056553/pexels-photo-1056553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>
      <div className="container-custom relative z-10 mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 heading-2 text-white">Contact Us</h1>
          <p className="text-lg text-white md:text-xl">
          We'd love to hear from you! Whether you have questions about our church, need prayer, or want to connect with our community, we're here to help.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Get in Touch</h2>
            
            <div className="space-y-6">
              {addressInfo.map((item) => (
                <Card key={item.title}>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <Image  src={item.icon} alt={item.title} width={24} height={24} className="mt-1 h-6 w-6 text-primary" />
                    <div> 
                      <h3 className="font-semibold">{item.title}</h3> 
                      {item.details}
                    </div>
                  </CardContent>
                </Card>
              ))} 
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Send Us a Message</h2>
            <Card>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
    </section>

    <section className="section-padding">
    <div className="md:text-center text-start mb-12">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Find Our Location
            </h2>
          </div>
          <Card className="overflow-hidden p-0">
            <CardContent className="p-0">
              <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5163445479325!2d36.947716811258495!3d-1.4637750358411812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0b1cf7c0501b%3A0x198a106e6e1a7989!2sNoonkopir%20Bible%20Baptist%20Church!5e0!3m2!1sen!2ske!4v1754367139302!5m2!1sen!2ske" 
               width="100%" 
               height="450" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               
               />
            </CardContent>
          </Card>
    </section>

    <section className="section-padding bg-muted/30">
        <div className="md:text-center text-start">
          <h2 className="mb-2 heading-3">Frequently Asked Questions</h2>
        </div>

        <div className="mx-auto max-w-4xl">
          {faqs.map((faq, index) => (
            <div key={index}>
              <Accordion 
              type="single" 
              collapsible 
              className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>{faq.answer}</p>
                </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
    </section>

    <section className="section-padding">
        <div className="md:text-center text-start">
          <Card className="max-w-2xl mx-auto">
            <h2 className="mb-2 heading-3">How to get to heaven from Kenya</h2>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                If you're interested in learning how to get to heaven from Kenya, we invite you to visit our website or contact us for more information. 
              </p>
              <Button className="bg-green-100">
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
  </div>
  );
};

export default Contact;