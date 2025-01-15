"use server"

import { url } from "@/url"
import axios from "axios"
import { revalidatePath } from "next/cache"

export async function fetchFoods(){
    const { data: { foods } } = await axios.get(url + "/food/readFoods")

    return foods
}

export async function revalidatePages() {

    //re-renders server components
    revalidatePath("/")
    revalidatePath("/cart")
}