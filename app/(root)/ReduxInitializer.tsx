/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { retrieveCart } from "@/lib/features/cart/cartSlice"
import { useAppDispatch } from "@/lib/hooks"
import { useSession } from "next-auth/react"
import { useEffect } from "react"

export default function ReduxInitializer({ children }: Readonly<{ children: React.ReactNode }>) {

  const dispatch = useAppDispatch()
  const { data } = useSession()

  useEffect(() => {

    dispatch(retrieveCart(data?.user?.cart ? data?.user?.cart : {}));

  }, [])

  return children
}
