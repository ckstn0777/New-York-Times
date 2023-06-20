import { FliterStore } from "@/types/Filter";
import { create } from "zustand";

export const useScrapFilter = create<FliterStore>((set) => ({
  headline: "",
  pubDate: null,
  country: [],
  setFilter: ({ headline, pubDate, country }) =>
    set({ headline, pubDate, country }),
}));
