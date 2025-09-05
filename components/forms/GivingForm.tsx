"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CustomInput, FormFieldType } from "./CustomInput";
import { Loader2, Smartphone, Building, Phone } from "lucide-react";
import { toast } from "sonner";
import { givingSchema } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { SelectItem } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { givingCategories } from "@/constants";

type FormData = z.infer<typeof givingSchema>;

const GivingForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm<FormData>({
        resolver: zodResolver(givingSchema),
        defaultValues: {
            amount: '',
            frequency: 'one-time',
            category: 'tithe',
            paymentMethod: 'mpesa',
        },
    });

    const onSubmit = (data: FormData) => {   
    setLoading(true);
    try {
       console.log(data); 
       toast.success("Thank you for your generous gift! Redirecting to payment...");
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
        name="amount"
        fieldType={FormFieldType.INPUT}
        label="Amount (KES)"
        placeholder="0.00"
      />

      <CustomInput
      control={form.control}
      name="frequency"
      fieldType={FormFieldType.RADIO}
      label="Frequency"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="one-time" id="one-time" />
        <Label htmlFor="one-time">One-time</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="weekly" id="weekly" />
        <Label htmlFor="weekly">Weekly</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="monthly" id="monthly" />
        <Label htmlFor="monthly">Monthly</Label>
      </div>
    </CustomInput>

      <CustomInput
        control={form.control}
        name="category"
        fieldType={FormFieldType.SELECT}
        label="Giving Category"
        placeholder="Select a category"
      >
        {givingCategories.map((cat) => (
          <SelectItem key={cat.id} value={cat.id}>
            {cat.name} - {cat.description}
          </SelectItem>
        ))}
      </CustomInput>

      <div className="space-y-3">
        <Label>Payment Method</Label>
        <Tabs 
          value={form.watch('paymentMethod')} 
          onValueChange={(value) => form.setValue('paymentMethod', value as 'mpesa' | 'bank')}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mpesa">M-Pesa</TabsTrigger>
            <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mpesa" className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Smartphone className="h-8 w-8 text-green-600" />
              <div>
                <h4 className="font-semibold">M-Pesa Payment</h4>
                <p className="text-sm text-muted-foreground">
                  Pay via M-Pesa: Send to 0711 483 287 <br /> 
                  Name: Pastor Andrew
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="bank" className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h4 className="font-semibold">Bank Transfer</h4>
                <p className="text-sm text-muted-foreground">
                  Account: Noonkopir Bible Baptist Church<br />
                  Bank: Kenya Commercial Bank<br />
                  Account No: 1234567890
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-green-100 hover:bg-green-100/80 text-white" 
        size="lg"
        disabled={loading}
      >
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Give Now'}
      </Button>
    </form>
  </Form>
  )
}

export default GivingForm