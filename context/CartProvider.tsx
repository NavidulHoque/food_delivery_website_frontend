/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { getCart, updateCartBackend } from "@/app/(root)/actions/cart";
import { User } from "@/app/(root)/layout";
import { useSession } from "next-auth/react";
import { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";
import { useToast } from "@/hooks/use-toast"

export interface CartContextType {
    cart: { [key: string]: number };
    setCart: Dispatch<SetStateAction<{ [key: string]: number }>>;
    addToCart: (food: string) => Promise<void>;
    removeFromCart: (food: string) => Promise<void>;
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export default function CartProvider({ children }: { children: React.ReactNode }) {

    const [cart, setCart] = useState<{ [key: string]: number }>({})
    const { data, status } = useSession()
    const { toast } = useToast()

    // console.log("cart", cart)
    // console.log("data", data)
    // console.log("status", status)

    useEffect(() => {

        if (status === "authenticated") {
            fetchCart()
        }

    }, [status])


    async function fetchCart() {

        const cart = await getCart(data?.user as User)
        setCart(cart)
    }


    const updateBackendAndSession = async (cart: { [key: string]: number }) => {

        await updateCartBackend(data?.user as User, cart)

        // const newUserSession = {
        //     email: data?.user.email,
        //     username: data?.user.username,
        //     photo: data?.user.photo,
        //     provider: data?.user.provider,
        //     cart
        // }

        // await update(newUserSession);
    }


    const addToCart = async (food: string) => {

        if (status === "loading") {

            toast({
                variant: "warning",
                description: "Loading your cart, please wait a moment"
            })
        }

        else {
            const localCart = { ...cart }

            localCart[food] = (localCart[food] || 0) + 1

            setCart(localCart)

            await updateBackendAndSession(localCart)
        }
    }


    const removeFromCart = async (food: string) => {

        const localCart = { ...cart }

        localCart[food] = localCart[food] - 1

        if (localCart[food] === 0) {
            delete localCart[food]
        }

        setCart(localCart)

        await updateBackendAndSession(localCart)
    }


    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )

}