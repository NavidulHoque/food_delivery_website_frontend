/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { updateCartBackend } from '@/app/(root)/actions/cart'
import { User } from '@/app/(root)/layout';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react'

export default function UpdateCartBackend({cart}: {cart: { [key: string]: number }}) {

    const { data } = useSession();

    useEffect(() => {

        updateCartBackend(data?.user as User, cart)

    }, [cart])

    return <></>
}
