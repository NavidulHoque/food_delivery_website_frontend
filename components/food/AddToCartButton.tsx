"use client"

import Image from "next/image"
import addIconWhite from "@/public/add_icon_white.png"
import addIconGreen from "@/public/add_icon_green.png"
import removeIconRed from "@/public/remove_icon_red.png"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { add, remove } from "@/lib/features/cart/cartSlice"
import { RootState } from "@/lib/store"
import dynamic from 'next/dynamic'

const LocalStorageActions = dynamic(() => import('./LocalStorageActions'), { ssr: false })


export default function AddToCartButton({ foodName }: { foodName: string }) {

    const cart = useAppSelector((state: RootState) => state.cart.cart)
    const dispatch = useAppDispatch()

    return (

        <>
            <LocalStorageActions />
            {cart[foodName] ? (
                <div className="bg-white flex gap-x-3 px-3 py-2 rounded-full absolute bottom-1/2 right-[10px]" >

                    <Image
                        src={removeIconRed}
                        alt="icon"
                        quality={100}
                        className="cursor-pointer"
                        onClick={() => dispatch(remove(foodName))}
                    />

                    <span>{cart[foodName]}</span>

                    <Image
                        src={addIconGreen}
                        alt="icon"
                        quality={100}
                        className="cursor-pointer"
                        onClick={() => dispatch(add(foodName))}
                    />

                </div>
            ) : (
                <Image
                    src={addIconWhite}
                    alt="icon"
                    quality={100}
                    className="absolute bottom-1/2 right-[10px] cursor-pointer"
                    onClick={() => dispatch(add(foodName))}
                />
            )}
        </>

    )

}