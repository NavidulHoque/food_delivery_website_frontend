import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Food } from "@/components/food/FoodDisplayServer"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function subTotalPrice(cart: { [key: string]: number }, cartFoodList: Food[], cartStringArray: string[]) {

  return cartStringArray.reduce((acc, cur) => {

    const price = cartFoodList.find(food => food.name === cur)?.price

    acc += price as number * cart[cur]

    return acc
  }, 0)
}

export function generateCartFoodList(isCartEmpty: boolean, foods: Food[], cartStringArray: string[]) {

  if (!isCartEmpty) {
    return foods.filter((food: Food) => cartStringArray.includes(food.name))
  }
}


