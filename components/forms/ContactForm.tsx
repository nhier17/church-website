"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CustomInput, FormFieldType } from "./CustomInput";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  subject: z.string().min(10, {
    message: "Subject must be at least 10 characters long",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long",
  }),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully 🎉");
        form.reset(); 
      } else {
        toast.error(result?.error || "Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomInput
          control={form.control}
          name="name"
          label="Name"
          placeholder="Enter your name"
          fieldType={FormFieldType.INPUT}
        />
        <CustomInput
          control={form.control}
          name="email"
          label="Email"
          placeholder="Enter your email"
          fieldType={FormFieldType.INPUT}
        />
        <CustomInput
          control={form.control}
          name="subject"
          label="Subject"
          placeholder="Enter your subject"
          fieldType={FormFieldType.INPUT}
        />
        <CustomInput
          control={form.control}
          name="message"
          label="Message"
          rows={6}
          placeholder="Enter your message"
          fieldType={FormFieldType.TEXTAREA}
        />

        <Button type="submit" disabled={loading} className="bg-green-100 w-full hover:bg-green-100/80 text-white">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
