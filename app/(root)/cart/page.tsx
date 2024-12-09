"use client"

import ShadTable from "@/components/cart/ShadTable"
import ShowCartEmpty from "@/components/cart/ShowCartEmpty"
import { Food, foodList } from "@/data/foodList"
import { useAppSelector } from "@/lib/hooks"
import Loader from "@/components/common/Loader"
import { subTotalPrice } from "@/lib/utils"
import Link from "next/link"


export default function Cart() {

  const { cart, loading } = useAppSelector(state => state.cart)

  const cartFoodArray = Object.keys(cart)

  const isCartEmpty = cartFoodArray.length === 0

  const cartFoodList = !isCartEmpty && foodList.filter(food => cartFoodArray.includes(food.name))

  const subTotal = !isCartEmpty && subTotalPrice(cart, cartFoodList as Food[])

  return (
    <section className={`min-h-[82vh] py-5 ${isCartEmpty || loading ? "flex-center" : ""}`}>

      {loading ? (

        <Loader width="100" height="100" />

      ) : isCartEmpty ? (

        <ShowCartEmpty />

      ) : (

        <>
          <ShadTable cartFoodList={cartFoodList as Food[]} cart={cart} />

          <div className="flex mt-20">

            <div className="w-[50%] space-y-5">

              <h1 className="text-28-semibold">Cart Totals</h1>

              <div className="flex-column gap-y-2">

                <div className="flex-between">

                  <span className="">Subtotal</span>
                  <span>${subTotal}</span>

                </div>

                <hr />

              </div>

              <div className="flex-column gap-y-2">

                <div className="flex-between">

                  <span>Delivery fee</span>
                  <span>$2</span>

                </div>

                <hr />

              </div>

              <div className="flex-column">

                <div className="flex-between">

                  <span className="font-medium">Total</span>
                  <span>${subTotal as number + 2}</span>

                </div>

              </div>

              <Link href="/placeOrder" className="bg-tomato text-white p-4 inline-block rounded-md ">PROCEED TO CHECKOUT</Link>

            </div>

          </div>
        </>
      )}

    </section>
  )
}
