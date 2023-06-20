"use client";

import Category from "../templates/Category";
import { useHomeFilter } from "@/store/useHomeFilter";

export default function HomeCategoryContainer() {
  const { headline, pubDate, country, setFilter } = useHomeFilter();

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
