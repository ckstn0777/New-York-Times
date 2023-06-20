import clsx, { ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const formatDate = (d: Date | string, f: string) => {
  return format(typeof d === "string" ? new Date(d) : d, f);
};
