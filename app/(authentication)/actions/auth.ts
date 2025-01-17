'use server'

import { signIn, signOut } from "@/auth";
import { url } from "@/url";
import axios from "axios";

export async function login(formData: FormData) {
  const action = formData.get('action') as string
  await signIn(action, { redirectTo: "/" });
}

export async function logout() {
  await signOut({ redirectTo: "/" })
}

export async function registration({username, email, password}: {username: string, email: string, password: string}){

  const response = await axios.post(url + "/auth/registration", {
    username,
    email,
    password,
    provider: "credentials",
    role: "user"
  })

  return response
}

