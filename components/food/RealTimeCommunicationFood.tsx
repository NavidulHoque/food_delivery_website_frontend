"use client"

import { useEffect } from "react"
import socket from "@/socket";
import { revalidatePages } from "@/app/(root)/actions/foods";


export default function RealTimeCommunicationFood() {

    //listening to real time communication
    useEffect(() => {

        const handleRevalidation = () => {
            revalidatePages()
        }

        socket.on('newFood', handleRevalidation)

        socket.on('deleteFood', handleRevalidation)

        return () => {
            socket.off("newFood", handleRevalidation)
            socket.off("deleteFood", handleRevalidation)
        };

    }, [])

    return <></>
}
