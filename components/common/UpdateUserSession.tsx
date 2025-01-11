/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect } from "react";
import { useSession } from 'next-auth/react'

export default function UpdateUserSession({cart}: {cart: { [key: string]: number }}) {

    const { data, update } = useSession()

    useEffect(() => {

        async function updateUserSession() {

            const newUserData = {
                email: data?.user.email,
                username: data?.user.username,
                photo: data?.user.photo,
                provider: data?.user.provider,
                cart
            };

            // Call update to refresh the session on the client side
            await update(newUserData);
        }

        updateUserSession()

    }, [cart])

    return <></>
}
