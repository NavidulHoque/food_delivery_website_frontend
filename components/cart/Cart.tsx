"use client"

import ShadTable from "@/components/cart/ShadTable"
import ShowCartEmpty from "@/components/cart/ShowCartEmpty"
import { subTotalPrice } from "@/lib/utils"
import Link from "next/link"
import { Food } from "@/components/food/FoodDisplayServer";
import useCart from "@/hooks/useCart"

export default function Cart({ foods }: { foods: Food[]}) {

    const { cart } = useCart()

    const cartArray = Object.keys(cart)

    const isCartEmpty = cartArray.length === 0

    const cartFoodList = !isCartEmpty && foods.filter((food: Food) => cartArray.includes(food.name))

    const subTotal = !isCartEmpty && subTotalPrice(cart, cartFoodList as Food[])

    return (
        <section className={`min-h-[82vh] py-5 ${isCartEmpty ? "flex-center" : ""}`}>

            {isCartEmpty ? (

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

                            <Link href="/placeOrder" className="bg-tomato hover:bg-tomato/90 text-white px-4 py-3 inline-block rounded-md ">Place Order</Link>

                        </div>

                    </div>
                </>
            )}

        </section>
    )
}
