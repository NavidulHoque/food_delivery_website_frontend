"use client"

import { remove } from '@/lib/features/cart/cartSlice'
import { useAppDispatch } from '@/lib/hooks'
import { X } from 'lucide-react'

export default function Remove({ foodName }: { foodName: string }) {

    const dispatch = useAppDispatch()

    return <X onClick={() => dispatch(remove(foodName))} className='cursor-pointer' />
}
