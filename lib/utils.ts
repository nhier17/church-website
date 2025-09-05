import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Users, Heart, BookOpen, Music, Home, HandHeart } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'worship': return 'bg-blue-100 text-blue-800';
    case 'youth': return 'bg-green-100 text-green-50';
    case 'outreach': return 'bg-orange-100 text-orange-800';
    case 'children': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

//get ministry icon
export const getMinistryIcon = (ministryName: string): LucideIcon => {
  switch (ministryName.toLowerCase()) {
    case 'kids ministry': return Users;
    case 'youth ministry': return Heart;
    case 'adult ministry': return BookOpen;
    case 'worship ministry': return Music;
    case 'small groups': return Home;
    case 'outreach ministry': return HandHeart;
    default: return Users;
  }
};

export const givingSchema = z.object({
  amount: z.string().min(1, 'Amount is required').refine(
    (val) => !isNaN(Number(val)) && Number(val) > 0,
    'Amount must be a positive number'
  ),
  frequency: z.enum(['one-time', 'weekly', 'monthly']),
  category: z.string().min(1, 'Please select a category'),
  paymentMethod: z.enum(['mpesa', 'bank']),
});

