import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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