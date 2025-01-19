import AppDownload from "@/components/appDownload/AppDownload";
import ExploreMenu from "@/components/home/exploreMenu/ExploreMenu";
import FoodDisplayServer from "@/components/home/food/FoodDisplayServer";
import Hero from "@/components/home/hero/Hero";
import CategoryProvider from "@/context/CategoryProvider";

export const dynamic = "force-dynamic";

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
