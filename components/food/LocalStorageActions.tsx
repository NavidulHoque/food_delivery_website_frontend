"use client"

import { useAppSelector } from "@/lib/hooks"
import { RootState } from "@/lib/store"
import { useEffect } from "react";

export default function LocalStorageActions() {
    const cart = useAppSelector((state: RootState) => state.cart.cart)

    useEffect(() => {
        
        localStorage.setItem("cartOfFoodDelivery", JSON.stringify(cart));
        
    }, [cart]);

    return <></>
}
