import { X } from 'lucide-react'
import useCart from '@/hooks/useCart'

export default function Remove({ foodName }: { foodName: string }) {

    const { removeFromCart } = useCart()

    return <X onClick={() => removeFromCart(foodName)} className='cursor-pointer' />
}
