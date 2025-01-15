"use server";

import { Food } from "@/components/food/FoodDisplayServer";
import { url } from "@/url";
import axios from "axios";

export async function createOrder({
    foodItems,
    totalPrice,
    customerDetails,
    paymentType,
    userID
}: {
    foodItems: Food[];
    totalPrice: number;
    customerDetails: {
        name: string;
        email: string;
        address: string;
        phone: string;
    };
    paymentType: string;
    userID: string;
}) {

    await axios.post(url + "/order/place", {
        foodItems,
        totalPrice,
        customerDetails,
        paymentType,
        userID
    })
    
    return
}
