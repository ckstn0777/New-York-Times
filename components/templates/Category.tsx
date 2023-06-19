"use client";

import { useState } from "react";
import FliterButton from "../ui/FliterButton";
import FilterModal from "./FilterModal";

export default function Category() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex gap-[7px] bg-white-100 px-5 py-[13px]">
        <FliterButton
          text="전체 헤드라인"
          leftIcon="search"
          onClick={() => setIsModalOpen(true)}
        />
        <FliterButton
          text="전체 날짜"
          leftIcon="calendarCheck"
          onClick={() => setIsModalOpen(true)}
        />
        <FliterButton text="전체 국가" onClick={() => setIsModalOpen(true)} />
      </div>

      {isModalOpen && <FilterModal onClose={onClose} />}
    </>
  );
}
