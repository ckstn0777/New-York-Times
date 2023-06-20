"use client";

import { useScrapFilter } from "@/store/useScrapFilter";
import Category from "../templates/Category";
import { useScrap } from "@/store/useScrap";

export default function ScrapCategoryContainer() {
  const { headline, pubDate, country, setFilter } = useScrapFilter();
  const { scrap } = useScrap();

  if (scrap.length === 0) return null;

  return (
    <>
      <Category
        headline={headline}
        pubDate={pubDate}
        country={country}
        setFilter={setFilter}
      />
      <hr className="bg-gray border-0 h-[1px]" />
    </>
  );
}
