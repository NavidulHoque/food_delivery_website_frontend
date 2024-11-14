import { foodList, Food } from "@/data/foodList";
import FoodItem from "./FoodItem";

export default function FoodDisplay() {
  return (
    <section className="flex-column gap-y-10">

      <h1 className="text-36-medium text-[#262626]">Top dishes near you</h1>

      <div className="grid grid-cols-auto-fit gap-x-7 gap-y-10">

        {foodList.map((food: Food) => (

          <FoodItem key={food.id} food={food} />

        ))}

      </div>

    </section>
  )
}
