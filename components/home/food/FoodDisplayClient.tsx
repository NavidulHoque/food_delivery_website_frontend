"use client"

import useCategory from "@/hooks/useCategory";
import { Food } from "@/lib/type";
import FoodItem from "./FoodItem";
import MenuWrapper from "../MenuWrapper";

export default function FoodDisplayClient({ foods }: { foods: Food[] }) {

    const { category, setCategory } = useCategory()

    const filteredFoods = category
        ? foods.filter((food) => food.category === category)
        : foods;

    return (
        <section >

            <MenuWrapper>

                <h1 className="self-start text-36-medium text-[#262626] cursor-pointer" onClick={() => setCategory("")}>Top dishes near you</h1>

                <div className="grid grid-cols-auto-fit gap-x-7 gap-y-10">

                    {filteredFoods.map((food: Food) => (

                        <FoodItem key={food._id} food={food} />

                    ))}

                </div>

            </MenuWrapper>

        </section>
    )
}
