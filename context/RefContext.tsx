"use client"

import { createContext, RefObject, useRef } from "react";

export interface RefContextType {
    menuRef: RefObject<HTMLDivElement | null>;
    contactRef: RefObject<HTMLDivElement | null>;
}

export const RefContext = createContext<RefContextType>({} as RefContextType)

export default function RefProvider({ children }: { children: React.ReactNode }) {

    const menuRef = useRef<HTMLDivElement | null>(null)
    const contactRef = useRef<HTMLDivElement | null>(null)

    return (
        <RefContext.Provider value={{ menuRef, contactRef}}>
            {children}
        </RefContext.Provider>
    )
}