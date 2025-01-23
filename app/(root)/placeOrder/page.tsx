import PlaceOrder from "@/components/placeOrder/PlaceOrder";
import { fetchFoods } from "../actions/foods";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Place Order - Tomato",
  description: "Place your order from this page",
};

export default async function PlaceOrderPage() {

  const foods = await fetchFoods()

  return (
    <PlaceOrder foods={foods} />
  )
}
