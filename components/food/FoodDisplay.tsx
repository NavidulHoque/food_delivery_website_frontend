"use client"

import { foodList, Food } from "@/data/foodList";
import FoodItem from "./FoodItem";
import useCategory from "@/hooks/useCategory";

export default function FoodDisplay() {

  const {category, setCategory} = useCategory()

  const filteredFoodList = foodList.filter(food => food.category.includes(category))

  return (
    <section className="flex-column gap-y-10">

      <h1 className="self-start text-36-medium text-[#262626] cursor-pointer" onClick={() => setCategory("")}>Top dishes near you</h1>

      <div className="grid grid-cols-auto-fit gap-x-7 gap-y-10">

        {filteredFoodList.map((food: Food) => (

          <FoodItem key={food.id} food={food} />

        ))}

      </div>

    </section>
  )
}
