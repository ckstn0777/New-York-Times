"use client";

import ScrapEmpty from "./ScrapEmpty";
import NytimesCard from "../ui/NytimesCard";
import useScrapHook from "@/hooks/useScrapHook";
import { Toaster } from "react-hot-toast";
import { useScrapFilter } from "@/store/useScrapFilter";
import { format } from "date-fns";
import { FILTER_COUNTRIES } from "@/lib/country";

export default function NytimesScrapList() {
  const { scrap, onScrap, onUnScrap } = useScrapHook();
  const { headline, pubDate, country } = useScrapFilter();

  const filteredScrap = scrap.filter((item) => {
    // 헤드라인 검색 함수 - 간단 단어 검색정도...
    const searchHeadline = (a: string, b: string) => {
      if (b === "") return true; // b가 빈 문자열이면 전체
      return a.toLowerCase().includes(b.toLowerCase());
    };

    // 날짜 같은지 비교하는 함수
    const isSameDate = (a: Date, b: Date | null) => {
      if (b === null) return true; // b가 null이면 전체
      return format(a, "yyyy-MM-dd") === format(b, "yyyy-MM-dd");
    };

    // 나라 비교
    const isSameCountry = (a: string[], b: string[]) => {
      if (b.length === 0) return true; // b가 빈 배열이면 전체
      return a.some((item) => b.includes(item));
    };

    return (
      searchHeadline(item.headline, headline) &&
      isSameDate(
        new Date(item.pubDate),
        typeof pubDate === "string" ? new Date(pubDate) : pubDate
      ) &&
      isSameCountry(
        item.glocations?.map((g) => g.toLowerCase()),
        country.map((c) =>
          FILTER_COUNTRIES[
            c as unknown as keyof typeof FILTER_COUNTRIES
          ]?.toLowerCase()
        )
      )
    );
  });

  if (filteredScrap.length === 0) {
    return <ScrapEmpty />;
  }

  return (
    <>
      <section className="h-full grid grid-cols-1 gap-[8px] sm:grid-cols-2 lg:grid-cols-3 mx-[20px] my-[20px]">
        {filteredScrap.map((card) => (
          <NytimesCard
            key={card.id}
            card={card}
            isScraped={scrap.some((item) => item.id === card.id)}
            onScrap={onScrap}
            onUnScrap={onUnScrap}
          />
        ))}

        {/* {hasNextPage &&
            Array.from({ length: 2 }).map((_, idx) => (
              <CardSkeleton key={idx} ref={idx === 0 ? ref : undefined} />
            ))} */}
      </section>
      <Toaster position="bottom-center" />
    </>
  );
}
