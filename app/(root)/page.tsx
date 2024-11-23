import AppDownload from "@/components/appDownload/AppDownload";
import ExploreMenu from "@/components/exploreMenu/ExploreMenu";
import FoodDisplay from "@/components/food/FoodDisplay";
import Hero from "@/components/hero/Hero";
import CategoryProvider from "@/context/CategoryProvider";

export default function Home() {
  return (
    <section className="flex-column gap-y-10">

      <Hero />

      <CategoryProvider>

        <ExploreMenu />

        <FoodDisplay />
        
      </CategoryProvider>

      <AppDownload />

    </section>
  );
}
