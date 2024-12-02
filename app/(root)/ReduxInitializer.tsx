/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { retrieve } from "@/lib/features/cart/cartSlice"
import { useAppDispatch } from "@/lib/hooks"
import { useEffect } from "react"

export default function ReduxInitializer({children}: Readonly<{children: React.ReactNode}>) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    
    const cartFromLocalStorage = localStorage.getItem("cartOfFoodDelivery");

    if (cartFromLocalStorage) {

      dispatch(retrieve(JSON.parse(cartFromLocalStorage)));
    }
    
  }, [])
  
  return children
}
