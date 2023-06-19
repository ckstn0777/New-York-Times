import Link from "next/link";
import Icon from "../ui/Icon";

export default function Footer() {
  return (
    <footer className="w-full bg-black-100 fixed left-0 bottom-0 z-10 px-[80px] py-[20px] flex justify-between items-center rounded-[30px]">
      <Link href="/" className="flex flex-col items-center">
        <Icon name="home" fill="white-100" className="mb-[10px]" />
        <p className="text-white-100 text-[10px] font-semibold ">홈</p>
      </Link>
      <Link href="/scrap" className="flex flex-col items-center">
        <Icon name="sheet" stroke="black-80" className="mb-[10px]" />
        <p className="text-black-80 text-[10px] font-semibold ">스크랩</p>
      </Link>
    </footer>
  );
}
