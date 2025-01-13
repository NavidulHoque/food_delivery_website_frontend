"use client"

import Image from "next/image"
import addIconWhite from "@/public/add_icon_white.png"
import addIconGreen from "@/public/add_icon_green.png"
import removeIconRed from "@/public/remove_icon_red.png"
import useCart from "@/hooks/useCart"
import { useSession } from "next-auth/react"


export default function AddToCartButton({ foodName }: { foodName: string}) {

    const { cart, addToCart, removeFromCart } = useCart()
    const { status } = useSession()

    const showQuantity = (cart[foodName] && status === "authenticated") ? (

        <div className="bg-white flex gap-x-3 px-3 py-2 rounded-full absolute bottom-1/2 right-[10px]">

            <Image
                src={removeIconRed}
                alt="icon"
                quality={100}
                className="cursor-pointer"
                onClick={() => removeFromCart(foodName)}
            />

            <span>{cart[foodName]}</span>

            <Image
                src={addIconGreen}
                alt="icon"
                quality={100}
                className="cursor-pointer"
                onClick={() => addToCart(foodName)}
            />

        </div>

    ) : (
        <Image
            src={addIconWhite}
            alt="icon"
            quality={100}
            className="absolute bottom-1/2 right-[10px] cursor-pointer"
            onClick={() => addToCart(foodName)}
        />
    )

    return showQuantity
}
