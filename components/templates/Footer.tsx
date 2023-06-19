"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // usePathname is a hook now imported from navigation
import Icon from "../ui/Icon";
import { cn } from "@/lib/utils";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-black-100 fixed left-0 bottom-0 z-10 px-[80px] py-[20px] flex justify-between items-center rounded-[30px]">
      <Link href="/" className="flex flex-col items-center">
        <Icon
          name="home"
          fill={pathname === "/" ? "white-100" : "black-80"}
          className="mb-[10px]"
        />
        <p
          className={cn(
            "text-black-80 text-[10px] font-semibold",
            pathname === "/" && "text-white-100"
          )}
        >
          홈
        </p>{" "}
      </Link>
      <Link href="/scrap" className="flex flex-col items-center">
        <Icon
          name="sheet"
          stroke={pathname === "/scrap" ? "white-100" : "black-80"}
          className="mb-[10px]"
        />
        <p
          className={cn(
            "text-black-80 text-[10px] font-semibold",
            pathname === "/scrap" && "text-white-100"
          )}
        >
          스크랩
        </p>
      </Link>
    </footer>
  );
}
