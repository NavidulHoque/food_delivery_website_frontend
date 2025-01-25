"use client"

import Image from "next/image"
import addIconWhite from "@/public/add_icon_white.png"
import addIconGreen from "@/public/add_icon_green.png"
import removeIconRed from "@/public/remove_icon_red.png"
import useCart from "@/hooks/useCart"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"


export default function AddToCartButton({ foodName }: { foodName: string }) {

    const { cart, addToCart, removeFromCart } = useCart()
    const { status } = useSession()
    const router = useRouter()
    const { toast } = useToast()

    const handleAddToCart = () => {

        if (status === "authenticated") {
            addToCart(foodName)

            toast({
                variant: "success",
                description: "Food added to the cart"
            })
        }

        else {
            router.push("/login")
        }
    }

    const handleRemoveFromCart = () => {

        removeFromCart(foodName)

        toast({
            variant: "success",
            description: "Food removed from the cart"
        })
    }

    const showQuantity = (cart[foodName] && status === "authenticated") ? (

        <div className="bg-white flex gap-x-3 px-3 py-2 rounded-full absolute bottom-1/2 right-[10px]">

            <Image
                src={removeIconRed}
                alt="icon"
                quality={100}
                className="cursor-pointer"
                onClick={handleRemoveFromCart}
            />

            <span>{cart[foodName]}</span>

            <Image
                src={addIconGreen}
                alt="icon"
                quality={100}
                className="cursor-pointer"
                onClick={handleAddToCart}
            />

        </div>

    ) : (
        <Image
            src={addIconWhite}
            alt="icon"
            quality={100}
            className="absolute bottom-1/2 right-[10px] cursor-pointer"
            onClick={handleAddToCart}
        />
    )

    return showQuantity
}
