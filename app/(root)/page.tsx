import AppDownload from "@/components/appDownload/AppDownload";
import ExploreMenu from "@/components/home/exploreMenu/ExploreMenu";
import FoodDisplayServer from "@/components/home/food/FoodDisplayServer";
import Hero from "@/components/home/hero/Hero";
import CategoryProvider from "@/context/CategoryProvider";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Home - Tomato",
  description: "This is the home page of tomato",
};

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
