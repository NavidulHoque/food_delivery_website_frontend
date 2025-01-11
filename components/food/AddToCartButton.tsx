"use client"

import Image from "next/image"
import addIconWhite from "@/public/add_icon_white.png"
import addIconGreen from "@/public/add_icon_green.png"
import removeIconRed from "@/public/remove_icon_red.png"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { addFrontend, removeFrontend } from "@/lib/features/cart/cartSlice"
import UpdateUserSession from "../common/UpdateUserSession"
import UpdateCartBackend from "../common/UpdateCartBackend"


export default function AddToCartButton({ foodName }: { foodName: string }) {

    const { cart } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    const remove = async () => {

        dispatch(removeFrontend(foodName))
    }

    const add = async () => {

        dispatch(addFrontend(foodName))
    }

    const showQuantity = cart[foodName] ? (

        <div className="bg-white flex gap-x-3 px-3 py-2 rounded-full absolute bottom-1/2 right-[10px]">

            <Image
                src={removeIconRed}
                alt="icon"
                quality={100}
                className="cursor-pointer"
                onClick={remove}
            />

            <span>{cart[foodName]}</span>

            <Image
                src={addIconGreen}
                alt="icon"
                quality={100}
                className="cursor-pointer"
                onClick={add}
            />

        </div>

    ) : (
        <Image
            src={addIconWhite}
            alt="icon"
            quality={100}
            className="absolute bottom-1/2 right-[10px] cursor-pointer"
            onClick={add}
        />
    )

    return (
        <>
            <UpdateCartBackend cart={cart} />
            <UpdateUserSession cart={cart} />
            {showQuantity}
        </>
    )
}
