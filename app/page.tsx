import ExploreMenu from "@/components/ExploreMenu";
import FoodDisplay from "@/components/food/FoodDisplay";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <section className="flex-column gap-y-10">

      <Hero />

      <ExploreMenu />

      <FoodDisplay />

    </section>
  );
}
