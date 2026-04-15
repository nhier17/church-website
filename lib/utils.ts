import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Users, Heart, BookOpen, Music, Home, HandHeart } from "lucide-react";
import { LucideIcon } from "lucide-react";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'worship': return 'bg-blue-100 text-blue-800';
    case 'youth': return 'bg-pink-100 text-pink-800';
    case 'outreach': return 'bg-orange-100 text-orange-800';
    case 'children': return 'bg-purple-100 text-purple-800';
    case 'teens': return 'bg-yellow-100 text-yellow-800';
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

// utils/dateHelpers.ts
export const getEventStartDate = (dateString: string): Date => {
  const [startDate] = dateString.split(" - ");
  return new Date(startDate.trim());
};

export const getEventEndDate = (dateString: string): Date => {
  const parts = dateString.split(" - ");
  const endDate = parts[1] ?? parts[0]; // Use start date if no end date exists
  return new Date(endDate.trim());
};

// lib/formatEventDate.ts
export const formatEventDate = (dateString: string): string => {
  if (!dateString) return "";

  const parts = dateString.split(" - ").map((date) => date.trim());

  const formatOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", formatOptions);

  // Single-day event
  if (parts.length === 1) {
    return formatDate(parts[0]);
  }

  const startDate = new Date(parts[0]);
  const endDate = new Date(parts[1]);

  // Same day
  if (startDate.toDateString() === endDate.toDateString()) {
    return formatDate(parts[0]);
  }

  // Same month and year (e.g., Apr 17–19, 2026)
  if (
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  ) {
    return `${startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })}–${endDate.getDate()}, ${endDate.getFullYear()}`;
  }

  // Same year (e.g., Apr 17 – May 2, 2026)
  if (startDate.getFullYear() === endDate.getFullYear()) {
    return `${startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })} – ${endDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}`;
  }

  // Different years
  return `${formatDate(parts[0])} – ${formatDate(parts[1])}`;
};


export const isUpcomingEvent = (dateString: string): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to start of the day
  return getEventEndDate(dateString) >= today;
};


