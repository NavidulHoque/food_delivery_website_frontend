"use server"

import { url } from "@/url"
import axios from "axios"

export const getCart = async ({email, provider}: {email: string, provider: string}) => {

    const response = await axios.post(url + '/cart/get', {email, provider})

    return response.data.cart
}

export const updateCartBackend = async ({email, provider}: {email: string, provider: string}, cart: { [key: string]: number}) => {

    await axios.put(url + '/cart/update', {email, provider, cart})
}
