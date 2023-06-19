import Category from "@/components/templates/Category";
import Footer from "@/components/templates/Footer";
import NytimesList from "@/components/templates/NytimesList";
// import HydratedNytimes, { getNytimes } from "@/hooks/hydration/hydratedNytimes";

export default function Home() {
  return (
    <main className="bg-bg-gray min-h-screen">
      <Category />
      <hr className="bg-gray border-0 h-[1px]" />

      {/* @.ts-expect-error Server Component */}
      {/* <HydratedNytimes /> */}

      <NytimesList />

      <Footer />
    </main>
  );
}
