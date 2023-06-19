import Button from "../ui/Button";
import DatePickerInput from "../ui/DatePickerInput";
import FliterButton from "../ui/FliterButton";
import Input from "../ui/Input";
import Modal from "../ui/Modal";

type FilterModalProps = {
  onClose: () => void;
};

export default function FilterModal({ onClose }: FilterModalProps) {
  return (
    <Modal onClose={onClose}>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">헤드라인</h3>
          <Input
            id="headline"
            placeholder="검색하실 헤드라인을 입력해주세요."
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">날짜</h3>
          <DatePickerInput />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">국가</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "대한민국",
              "중국",
              "일본",
              "미국",
              "북한",
              "러시아",
              "프랑스",
              "영국",
            ].map((country) => (
              <FliterButton text={country} key={country} />
            ))}
          </div>
        </div>

        <Button className="bg-primary">필터 적용하기</Button>
      </form>
    </Modal>
  );
}
