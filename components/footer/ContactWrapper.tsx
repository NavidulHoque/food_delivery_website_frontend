"use client"

import useRefCustom from "@/hooks/useRefCustom"

export default function ContactWrapper({ children }: { children: React.ReactNode }) {

    const { contactRef } = useRefCustom()

    return (
        <div ref={contactRef}>
            {children}
        </div>
    )
}
