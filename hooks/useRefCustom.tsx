"use client"

import { RefContext, RefContextType } from "@/context/RefContext"
import { useContext } from "react"

export default function useRefCustom(): RefContextType {
  return useContext(RefContext)
}
