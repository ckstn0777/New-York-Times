"use client";

import Link from "next/link";
import Icon from "../ui/Icon";
import NytimesCard from "../ui/NytimesCard";
import { useQuery } from "@tanstack/react-query";
import { getNytimes } from "@/hooks/hydration/hydratedNytimes";

export default function NytimesList() {
  const {
    data: nytimes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["nytimes"],
    queryFn: () => getNytimes(),
  });

  console.log(nytimes);

  return (
    <section className="h-full grid grid-cols-1 gap-[8px] sm:grid-cols-2 lg:grid-cols-3 mx-[20px] my-[20px]">
      {/* {nytimes?.map((card) => (
        <NytimesCard key={card.id} card={card} />
      ))} */}
    </section>
  );
}
