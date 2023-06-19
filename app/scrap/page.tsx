import Cards from "@/components/templates/Cards";
import Category from "@/components/templates/Category";
import Footer from "@/components/templates/Footer";
import ScrapEmpty from "@/components/templates/ScrapEmpty";

export default function Scrap() {
  return (
    <main className="bg-bg-gray min-h-screen">
      {/* <Category />
      <hr className="bg-gray border-0 h-[1px]" /> */}

      <ScrapEmpty />

      <Footer />
    </main>
  );
}
