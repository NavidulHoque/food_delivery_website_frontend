import RealTimeCommunication from "./RealTimeCommunication";
import FoodDisplayClient from "./FoodDisplayClient";
import { fetchFoods } from "@/app/(root)/actions/foods";

export interface Food {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  quantity?: string; // Optional property
}


export default async function FoodDisplayServer() {

  const foods = await fetchFoods()

  return (
    <>
      <RealTimeCommunication />
      <FoodDisplayClient foods={foods} />
    </>
  )
}
