"use client"

import { usePathname } from 'next/navigation'

export default function NavbarListWrapper({ children }: Readonly<{ children: React.ReactNode }>) {

    const pathname = usePathname()

    return pathname === "/" && children
}
