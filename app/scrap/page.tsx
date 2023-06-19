import Cards from "@/components/templates/NytimesList";
import Category from "@/components/templates/Category";
import Footer from "@/components/templates/Footer";
import dynamic from "next/dynamic";

export const metadata = {
  title: "NEW YORK TIMES - Scrap",
  description: "NEW YORK TIMES 스크랩 페이지",
};

// no ssr - nextjs dynamic import
const NytimesScrapList = dynamic(
  () => import("@/components/templates/NytimesScrapList"),
  {
    ssr: false,
  }
);

export default function Scrap() {
  return (
    <main className="bg-bg-gray min-h-screen">
      <Category />
      <hr className="bg-gray border-0 h-[1px]" />

      <NytimesScrapList />

      <Footer />
    </main>
  );
}
