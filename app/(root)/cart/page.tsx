import Cart from '@/components/cart/Cart';
import { fetchFoods } from '../actions/foods';


export default async function CartPage() {

  const foods = await fetchFoods()

  return (
    <Cart foods={foods} />
  )
}
