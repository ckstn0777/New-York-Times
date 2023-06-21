import Link from "next/link";
import Button from "../ui/Button";
import Icon from "../ui/Icon";

export default function NytimesEmpty() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center mx-10">
      <div className="flex flex-col items-center mb-5 gap-2">
        <Icon name="union" />
        <p className="text-black-80 text-lg">검색 결과가 없습니다.</p>
      </div>
    </div>
  );
}
