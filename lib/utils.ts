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

export function handleScroll(ref: React.RefObject<HTMLDivElement | null>) {

  if (ref.current) {

    setTimeout(() => {

      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
      }

    }, 0)
  }

  return
}

export async function delay() {
  return new Promise((resolve) => setTimeout(resolve, 20))
}