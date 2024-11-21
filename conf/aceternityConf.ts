import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function aceternityConf(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
