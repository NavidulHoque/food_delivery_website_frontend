"use server"

import { url } from "@/url"
import axios from "axios"

export async function readUser({email, provider}: {email: string, provider: string}) {
    const response = await axios.post(url + '/user/read', {email, provider})

    return response.data.user
}