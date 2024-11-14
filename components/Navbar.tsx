"use client"

import { navbarList, Item } from "@/data/navbarList";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {

  const [selectedItem, setSelectedItem] = useState("home")

  return (
    <nav className="h-[12vh] flex-between text-gray">

      <h2 className="text-36-bold text-tomato">Tomato.</h2>

      <ul className="flex-center gap-x-10">

        {navbarList.map((item: Item) => (

          <li
            key={item.label}
            className={`${selectedItem === item.label ? "border-b-2 border-gray" : ""} cursor-pointer`}
            onClick={() => setSelectedItem(item.label)}
          >
            {item.label}
          
          </li>

        ))}

      </ul>

      <div className="flex-center gap-x-6">

        <IoIosSearch className="text-[30px] cursor-pointer" />

        <div className="relative">

          <FaCartShopping className="text-[30px] cursor-pointer" />

          <span className="size-2 bg-tomato rounded-full absolute top-[-7px] right-[-7px]"></span>

        </div>

        <button
          className="text-[20px] border-[1px] border-tomato py-3 px-5 rounded-full hover:bg-[#fff4f2] transition duration-300"
        >
          Sign In
        </button>

      </div>

    </nav>
  )
}
