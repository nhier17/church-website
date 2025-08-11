"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { CustomInput, FormFieldType } from './CustomInput';
import { Loader2 } from 'lucide-react';
import { SelectItem } from '../ui/select';

const contactSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters long',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address',
    }),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters long',
    }),
    subject: z.string().min(10, {
        message: 'Subject must be at least 10 characters long',
    }),
    category: z.string().min(10, {
        message: 'Category must be at least 10 characters long',
    }),
});

const categories = [
    { value: 'general', label: 'General Question' },
    { value: 'prayer', label: 'Prayer Request' },
    { value: 'pastoral', label: 'Pastoral Care' },
    { value: 'volunteer', label: 'Volunteer' },
    { value: 'other', label: 'Other' },
];

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            category: '',
            message: '',
        },
    });

    const onSubmit = (data: z.infer<typeof contactSchema>) => {
        setLoading(true);
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
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
          name="category"
          label="Category"
          placeholder="Select a category"
          fieldType={FormFieldType.SELECT}
        >
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </CustomInput>
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
        <Button type="submit"
        disabled={loading}
        className="field-btn bg-green-100"
        >
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm