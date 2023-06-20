import { FliterStore } from "@/types/Filter";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// export const useScrapFilter = create<FliterStore>((set) => ({
//   headline: "",
//   pubDate: null,
//   country: [],
//   setFilter: ({ headline, pubDate, country }) =>
//     set({ headline, pubDate, country }),
// }));

// localStorage 저장까지 해서 유지할 경우 사용
// 장점 : 새로고침해도 데이터 유지
// 단점 : 새로고침해도 데이터 유지... 좀 애매하다.
export const useScrapFilter = create<FliterStore>()(
  persist<FliterStore>(
    (set) => ({
      headline: "",
      pubDate: null,
      country: [],
      setFilter: ({ headline, pubDate, country }) =>
        set({ headline, pubDate, country }),
    }),
    {
      name: "nytimes-scrap-filter", // localStorage 내 저장될 states 값을 관리하는 key
    }
  )
);
