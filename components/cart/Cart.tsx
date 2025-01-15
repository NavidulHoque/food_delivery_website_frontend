"use client"

import ShadTable from "@/components/cart/ShadTable"
import ShowCartEmpty from "@/components/cart/ShowCartEmpty"
import { subTotalPrice } from "@/lib/utils";
import { Food } from "@/components/food/FoodDisplayServer";
import useCart from "@/hooks/useCart"
import CashMemo from "./CashMemo"
import { generateCartFoodList } from "@/lib/utils";
import Loader from "../common/Loader";

export default function Cart({ foods }: { foods: Food[] }) {

    const { cart, isCartEmpty, cartStringArray, loading } = useCart()

    const cartFoodList = generateCartFoodList(isCartEmpty, foods, cartStringArray)

    const subTotal = !isCartEmpty && subTotalPrice(cart, cartFoodList as Food[], cartStringArray)

    return (
        <section className={`min-h-[82vh] py-5 ${isCartEmpty ? "flex-center" : ""}`}>

            {loading ? (

                <Loader />

            ) : isCartEmpty ? (

                <ShowCartEmpty />

            ) : (

                <div className="space-y-32">

                    <ShadTable cartFoodList={cartFoodList as Food[]} cart={cart} />

                    <CashMemo subTotal={subTotal as number} isRedirect={true} />

                </div>
            )}

        </section>
    )
}
