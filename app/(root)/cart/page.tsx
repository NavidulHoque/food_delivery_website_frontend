import Cart from '@/components/cart/Cart';
import { fetchFoods } from '../actions/foods';
import { Metadata } from 'next';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cart - Tomato",
  description: "Check your cart and place order from this page",
};

export default async function CartPage() {

  const foods = await fetchFoods()

  return (
    <Cart foods={foods} />
  )
}
