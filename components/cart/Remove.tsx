import { X } from 'lucide-react'
import { useAppDispatch } from '@/lib/hooks'
import { removeFrontend } from '@/lib/features/cart/cartSlice'

export default function Remove({ foodName }: { foodName: string }) {

    const dispatch = useAppDispatch()

    return <X onClick={() => dispatch(removeFrontend(foodName))} className='cursor-pointer' />
}
