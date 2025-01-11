import AppDownload from "@/components/appDownload/AppDownload";
import ExploreMenu from "@/components/exploreMenu/ExploreMenu";
import FoodDisplayServer from "@/components/food/FoodDisplayServer";
import Hero from "@/components/hero/Hero";
import CategoryProvider from "@/context/CategoryProvider";

export default async function Home() {
  return (
    <section className="flex-column gap-y-10">

      <Hero />

      <CategoryProvider>

        <ExploreMenu />

        <FoodDisplayServer />
        
      </CategoryProvider>

      <AppDownload />

    </section>
  );
}
