'use client'
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function aceternityConfig(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
