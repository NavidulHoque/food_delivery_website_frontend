"use client"

import { useAppSelector } from "@/lib/hooks";


export default function ShoppingCart() {

    const cart = useAppSelector(state => state.cart.cart)

    return (

        Object.keys(cart).length > 0 && (
            <span className="size-2 bg-tomato rounded-full absolute top-[-7px] right-[-7px]"></span>
        )
    )
}
