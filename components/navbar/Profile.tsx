"use client"

import Image from "next/image"
import { useState } from "react"
import { BsBag } from "react-icons/bs";
import logoutIcon from "@/public/logout_icon.png"
import { logout } from "@/app/(authentication)/actions/auth";
import useCart from "@/hooks/useCart";
import Link from "next/link";

export default function Profile({ children }: Readonly<{ children: React.ReactNode }>) {

  const [isHovered, setIsHovered] = useState(false)
  const [loading, setLoading] = useState(false)
  const {setCart} = useCart()

  const handleLogout = async () => {

    setLoading(true)
    setCart({})
    await logout()
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {children}

      {isHovered && (
        <div className="absolute top-8 right-[-10px] z-10 flex-column gap-y-2 bg-[#fff2ef] w-[120px] border-[1px] border-tomato rounded-md py-3 px-4">

          <Link href="/myOrders" className="flex-column items-center gap-x-2 cursor-pointer">

            <BsBag className="text-tomato" />

            <span className="text-lg">My Orders</span>

          </Link>

          <hr className="border-0 h-[1px] bg-slate-400" />

          <button
            className={`flex-column items-center gap-x-2 cursor-pointer ${loading ? "opacity-80" : ""}`}
            onClick={handleLogout}
            disabled={loading}
          >
            <Image src={logoutIcon} alt="logout" />

            <span className="text-lg">Log Out</span>

          </button>

        </div>
      )}

    </div>
  )
}
