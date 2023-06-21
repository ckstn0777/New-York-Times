import Button from "../ui/Button";
import DatePickerInput from "../ui/DatePickerInput";
import FliterButton from "../ui/FliterButton";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import { useState } from "react";
import { Filter, FliterStore } from "@/types/Filter";
import { FILTER_COUNTRIES } from "@/lib/country";

type FilterModalProps = {
  onClose: () => void;
  setFilter: ({ headline, pubDate, country }: Filter) => void;
} & FliterStore;

export default function FilterModal({
  onClose,
  headline: headlineProp,
  pubDate: pubDateProp,
  country: countryProp,
  setFilter,
}: FilterModalProps) {
  const [headline, setHeadline] = useState(headlineProp);
  const [pubDate, setPubDate] = useState<Date | null>(
    typeof pubDateProp === "string" ? new Date(pubDateProp) : pubDateProp
  );
  const [countries, setCountries] = useState<string[]>(countryProp);

  const onPubDateChange = (date: Date | null) => {
    setPubDate(date);
  };

  // country filter on/off
  const onCountryClick = (country: string) => {
    if (countries.includes(country)) {
      setCountries(countries.filter((c) => c !== country));
    } else {
      setCountries([...countries, country]);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(headline, pubDate, countries);

    setFilter({
      headline,
      pubDate,
      country: countries,
    });

    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <form className="flex flex-col gap-10" onSubmit={(e) => onSubmit(e)}>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">헤드라인</h3>
          <Input
            id="headline"
            placeholder="검색하실 헤드라인을 입력해주세요."
            value={headline}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setHeadline(e.target.value)
            }
            onReset={() => setHeadline("")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">날짜</h3>
          <DatePickerInput
            selectedDate={pubDate}
            onPubDateChange={onPubDateChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">국가</h3>
          <div className="flex flex-wrap gap-2">
            {Object.keys(FILTER_COUNTRIES).map((country) => (
              <FliterButton
                text={country}
                key={country}
                onClick={() => onCountryClick(country)}
                active={countries?.includes(country)}
              />
            ))}
          </div>
        </div>

        <Button className="bg-primary">필터 적용하기</Button>
      </form>
    </Modal>
  );
}
