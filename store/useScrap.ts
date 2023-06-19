import { Nytimes } from "@/types/Nytimes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  scrap: Nytimes[];
  setScrap: (scrap: Nytimes[]) => void;
};

// store 생성
export const useScrap = create<Store>()(
  persist<Store>(
    (set) => ({
      scrap: [],
      setScrap: (scrap) => set({ scrap }),
    }),
    {
      name: "nytimes-scrap", // localStorage 내 저장될 states 값을 관리하는 key
    }
  )
);
