"use client"

import { useEffect } from "react"
import socket from "@/socket";
import { revalidatePages } from "@/app/(root)/actions/foods";

export default function RealTimeCommunication() {

    //listening to real time communication
    useEffect(() => {

        socket.on('newFood', () => {

            revalidatePages()
        })

        socket.on('deleteFood', () => {

            revalidatePages()
        })

    }, [])

    return <></>
}
