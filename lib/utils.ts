import { Food } from "@/components/food/FoodDisplayServer"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function subTotalPrice(cart: { [key: string]: number }, cartFoodList: Food[]){

  const cartArray = Object.keys(cart)

  return cartArray.reduce((acc, cur) => {

    const price = cartFoodList.find(food => food.name === cur)?.price

    acc += price as number * cart[cur]

    return acc
  }, 0)
}
