"use server"

import { url } from "@/url"
import axios from "axios"
import { revalidatePath } from "next/cache"

export const getCart = async ({email, provider}: {email: string, provider: string}) => {

    const response = await axios.post(url + '/cart/get', {email, provider})

    return response.data.cart
}

export const updateCartBackend = async ({email, provider}: {email: string, provider: string}, cart: { [key: string]: number}) => {

    await axios.put(url + '/cart/update', {email, provider, cart})
}



export const removeFromCart = async ({email, provider}: {email: string, provider: string}, food: string, cart: { [key: string]: number}) => {

    await axios.put(url + '/cart/removeAndUpdate', {email, provider, cart, food})

    revalidatePath("/")
}

export const addToCart = async ({email, provider}: {email: string, provider: string}, food: string) => {

    await axios.put(url + '/cart/addAndUpdate', {email, provider, food})

    revalidatePath("/")
}