"use client"

import { useEffect } from "react"
import { revalidateMyOrder } from "@/app/(root)/actions/order";
import socket from "@/socket";

export default function RealTimeCommunicationOrder() {

    useEffect(() => {
        
        const handleUpdateStatus = () => {
            revalidateMyOrder()
        }

        socket.on("updateOrderStatus", handleUpdateStatus)

        return () => {
            socket.off("updateOrderStatus", handleUpdateStatus)
        }

    }, [])

    return <></>
}
