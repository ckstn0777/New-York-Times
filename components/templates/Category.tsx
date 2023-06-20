"use client";

import { useState } from "react";
import FliterButton from "../ui/FliterButton";
import FilterModal from "./FilterModal";
import { FliterStore } from "@/types/Filter";
import { format } from "date-fns";

type CategoryProps = FliterStore;

export default function Category({
  headline,
  pubDate,
  country,
  setFilter,
}: CategoryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex gap-[7px] bg-white-100 px-5 py-[13px]">
        <FliterButton
          text={headline === "" ? "전체 헤드라인" : headline}
          leftIcon="search"
          onClick={() => setIsModalOpen(true)}
          outline={headline !== ""}
          textEllipsis={true}
        />
        <FliterButton
          text={
            pubDate === null
              ? "전체 날짜"
              : format(
                  typeof pubDate === "string" ? new Date(pubDate) : pubDate,
                  "yyyy.MM.dd"
                )
          }
          leftIcon="calendarCheck"
          onClick={() => setIsModalOpen(true)}
          outline={pubDate !== null}
        />
        <FliterButton
          text={
            country.length === 0
              ? "전체 국가"
              : country.length === 1
              ? country[0]
              : `${country[0]} 외 ${country.length - 1}개`
          }
          onClick={() => setIsModalOpen(true)}
          outline={country.length > 0}
        />
      </div>

      {isModalOpen && (
        <FilterModal
          onClose={onClose}
          headline={headline}
          pubDate={pubDate}
          country={country}
          setFilter={setFilter}
        />
      )}
    </>
  );
}
