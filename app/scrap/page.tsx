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

const ScrapCategoryContainer = dynamic(
  () => import("@/components/container/ScrapCategoryContainer"),
  {
    ssr: false,
  }
);

export default function Scrap() {
  return (
    <main className="bg-bg-gray min-h-screen">
      <ScrapCategoryContainer />

      <NytimesScrapList />

      <Footer />
    </main>
  );
}
