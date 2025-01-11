import axios from "axios";
import { url } from "@/url";
import RealTimeCommunication from "./RealTimeCommunication";
import FoodDisplayClient from "./FoodDisplayClient";

export interface Food {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}


export default async function FoodDisplayServer() {

  const { data: { foods } } = await axios.get(url + "/food/readFoods")

  return (
    <>
      <RealTimeCommunication />
      <FoodDisplayClient foods={foods} />
    </>
  )
}
