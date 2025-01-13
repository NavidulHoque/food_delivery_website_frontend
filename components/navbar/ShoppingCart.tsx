"use client"

import useCart from "@/hooks/useCart"

export default function ShoppingCart() {

    const {cart} = useCart()

    return (

        Object.keys(cart).length > 0 && (
            <span className="size-2 bg-tomato rounded-full absolute top-[-7px] right-[-7px]"></span>
        )
    )
}
