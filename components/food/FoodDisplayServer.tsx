import RealTimeCommunicationFood from "./RealTimeCommunicationFood";
import FoodDisplayClient from "./FoodDisplayClient";
import { fetchFoods } from "@/app/(root)/actions/foods";


export default async function FoodDisplayServer() {

  const foods = await fetchFoods()

  return (
    <>
      <RealTimeCommunicationFood />
      <FoodDisplayClient foods={foods} />
    </>
  )
}
