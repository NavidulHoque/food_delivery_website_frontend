"use client"

import { CategoryContext, CategoryContextType } from "@/context/CategoryProvider"
import { useContext } from "react"

export default function useCategory(): CategoryContextType {
  return useContext(CategoryContext)
}
