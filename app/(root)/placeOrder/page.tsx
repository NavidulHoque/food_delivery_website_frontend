import PlaceOrder from "@/components/placeOrder/PlaceOrder";
import { fetchFoods } from "../actions/foods";

export default async function PlaceOrderPage() {

  const foods = await fetchFoods()

  return (
    <PlaceOrder foods={foods} />
  )
}
