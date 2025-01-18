"use client"

import ShadTable from "@/components/cart/ShadTable"
import ShowCartEmpty from "@/components/cart/ShowCartEmpty"
import {  generateCartInformation } from "@/lib/utils";
import { Food } from "@/lib/type";
import useCart from "@/hooks/useCart"
import CashMemo from "./CashMemo"
import Loader from "../common/Loader";

export default function Cart({ foods }: { foods: Food[] }) {

    const { cart, loading } = useCart()

    const {isCartEmpty, cartFoodList, subTotal} = generateCartInformation(cart, foods)

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
