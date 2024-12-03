"use client"

import ShadTable from "@/components/cart/ShadTable"
import ShowCartEmpty from "@/components/cart/ShowCartEmpty"

import { Food, foodList } from "@/data/foodList"
import { useAppSelector } from "@/lib/hooks"
import Loader from "@/components/common/Loader"


export default function Cart() {

  const { cart, loading } = useAppSelector(state => state.cart)

  const cartFoodArray = Object.keys(cart)

  const isCartEmpty = cartFoodArray.length === 0

  const cartFoodList = !isCartEmpty && foodList.filter(food => cartFoodArray.includes(food.name))

  const showCart = loading ? (

    <Loader width="100" height="100" />

  ) : isCartEmpty ? (

    <ShowCartEmpty />
    
  ) : (
    
    <ShadTable cartFoodList={cartFoodList as Food[]} cart={cart} />
  )

  return (
    <section className={`min-h-[82vh] py-5 ${isCartEmpty ? "flex-center" : ""}`}>

      {showCart}

    </section>
  )
}
