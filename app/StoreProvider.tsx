'use client'

import { useEffect, useRef, useState } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { retrieve } from '@/lib/features/cart/cartSlice'


export default function StoreProvider({ children }: { children: React.ReactNode }) {

  const storeRef = useRef<AppStore | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {

    setIsClient(true)

  }, [])
  

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()

    if (isClient) {
      storeRef.current.dispatch(retrieve(JSON.parse(localStorage.getItem("cartOfFoodDelivery") || "{}")))
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}