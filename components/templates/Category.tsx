import FliterButton from "../ui/FliterButton";

export default function Category() {
  return (
    <div className="flex gap-[7px] bg-white-100 px-5 py-[13px]">
      <FliterButton text="전체 헤드라인" leftIcon="search" />
      <FliterButton text="전체 날짜" leftIcon="calendarCheck" />
      <FliterButton text="전체 국가" />
    </div>
  );
}
