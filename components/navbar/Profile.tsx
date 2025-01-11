"use client"

import Image from "next/image"
import { useState } from "react"
import { BsBag } from "react-icons/bs";
import logoutIcon from "@/public/logout_icon.png"
import { logout } from "@/app/(authentication)/actions/auth";
import { useFormStatus } from "react-dom";
import Form from "next/form";

export default function Profile({ children }: Readonly<{ children: React.ReactNode }>) {

  const [isHovered, setIsHovered] = useState(false)
  const { pending } = useFormStatus()

  console.log(pending)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {children}

      {isHovered && (
        <div className="absolute top-8 left-[-10px] z-10 flex-column gap-y-2 bg-[#fff2ef] border-[1px] border-tomato rounded-md p-4">

          <div className="flex-column items-center gap-x-2 cursor-pointer">

            <BsBag className="text-tomato" />

            <span className="text-lg">Orders</span>

          </div>

          <hr className="border-0 h-[1px] bg-slate-400" />

          <Form action={logout}>

            <button
              className={`flex-column items-center gap-x-2 cursor-pointer ${pending ? "opacity-80" : ""}`}
              type="submit"
              disabled={pending}
            >
              <Image src={logoutIcon} alt="logout" />

              <span className="text-lg">LogOut</span>

            </button>

          </Form>

        </div>
      )}

    </div>
  )
}
