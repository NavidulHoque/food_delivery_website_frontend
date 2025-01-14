"use server"

import { url } from "@/url"
import axios from "axios"

export const getCart = async ({id}: {id: string}) => {

    const response = await axios.get(url + `/cart/get/${id}`)

    return response.data.cart
}

export const updateCartBackend = async ({email, provider}: {email: string, provider: string}, cart: { [key: string]: number}) => {

    await axios.put(url + '/cart/update', {email, provider, cart})
}
