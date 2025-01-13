"use client"

import { CartContext, CartContextType } from "@/context/CartProvider"
import { useContext } from "react"

export default function useCart(): CartContextType {
  return useContext(CartContext)
}
