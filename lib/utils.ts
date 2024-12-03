import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Food } from "@/data/foodList"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function totalPrice(cartFoodArray: string[], cartFoodList: Food[]){
    
}
