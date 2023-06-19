"use client";

import ScrapEmpty from "./ScrapEmpty";
import NytimesCard from "../ui/NytimesCard";
import useScrapHook from "@/hooks/useScrapHook";

export default function NytimesScrapList() {
  const { scrap, onScrap, onUnScrap } = useScrapHook();

  if (scrap.length === 0) {
    return <ScrapEmpty />;
  }

  return (
    <section className="h-full grid grid-cols-1 gap-[8px] sm:grid-cols-2 lg:grid-cols-3 mx-[20px] my-[20px]">
      {scrap.map((card) => (
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
  );
}
