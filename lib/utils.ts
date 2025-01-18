import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Food } from "./type"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateCartInformation(cart: { [key: string]: number }, foods: Food[]) {

  const cartStringArray = Object.keys(cart)

  const isCartEmpty = (cartStringArray.length === 0)

  if (isCartEmpty) {
    return { isCartEmpty }
  }

  const cartFoodList = foods.filter((food: Food) => cartStringArray.includes(food.name))

  const subTotal = cartStringArray.reduce((acc, cur) => {

    const price = cartFoodList.find(food => food.name === cur)?.price

    acc += price as number * cart[cur]

    return acc
  }, 0)

  return { isCartEmpty, cartFoodList, subTotal }
}


