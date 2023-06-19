import { cn } from "@/lib/utils";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "./Icon";

export default function DatePickerInput() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <label className="w-full relative" onClick={(e) => e.preventDefault()}>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        placeholderText="날짜를 선택해주세요."
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className={cn(
          "w-full h-[44px] border-[1px] border-gray rounded-lg px-[20px] py-[10px] outline-none",
          "placeholder:text-gray placeholder:text-sm"
        )}
      />
      <Icon
        name="calendarCheck"
        fill="gray"
        className="absolute right-[20px] top-[50%] translate-y-[-50%]"
      />
    </label>
  );
}
