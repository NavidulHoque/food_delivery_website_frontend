"use client"

import useCategory from "@/hooks/useCategory";
import { Food } from "./FoodDisplayServer";
import FoodItem from "./FoodItem";

export default function FoodDisplayClient({ foods }: { foods: Food[] }) {

    const { category, setCategory } = useCategory()

    const filteredFoods = category
        ? foods.filter((food) => food.category === category)
        : foods;

    return (
        <section className="flex-column gap-y-10">

            <h1 className="self-start text-36-medium text-[#262626] cursor-pointer" onClick={() => setCategory("")}>Top dishes near you</h1>

            <div className="grid grid-cols-auto-fit gap-x-7 gap-y-10">

                {filteredFoods.map((food: Food) => (

                    <FoodItem key={food._id} food={food} />

                ))}

            </div>

        </section>
    )
}
