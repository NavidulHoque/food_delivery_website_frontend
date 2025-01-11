import { url } from "@/url";
import axios from "axios";
import Cart from '@/components/cart/Cart';


export default async function CartPage() {

  const { data: { foods } } = await axios.get(url + "/food/readFoods")

  return (
    <Cart foods={foods} />
  )
}
