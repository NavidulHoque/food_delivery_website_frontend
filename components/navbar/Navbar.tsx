// import { navbarList, Item } from "@/data/navbarList";
// import { useState } from "react";
import Link from "next/link";
import ShoppingCart from "./ShoppingCart";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {

  // const [selectedItem, setSelectedItem] = useState("home")

  return (
    <nav className="h-[12vh] flex-between text-gray">

      <Link href="/" className="text-36-bold text-tomato">Tomato.</Link>

      {/* <ul className="flex-center gap-x-10">

        {navbarList.map((item: Item) => (

          <li
            key={item.label}
            className={`${selectedItem === item.label ? "border-b-2 border-gray" : ""} cursor-pointer`}
            onClick={() => setSelectedItem(item.label)}
          >
            {item.label}
          
          </li>

        ))}

      </ul> */}

      <div className="flex-center gap-x-6">

        <div className="relative">

          <Link href="/cart">
            <FaCartShopping className="text-[30px] cursor-pointer" />
          </Link>

          <ShoppingCart />

        </div>

        <Link
          className="text-[20px] border-[1px] border-tomato py-3 px-5 rounded-full hover:bg-[#fff4f2] transition duration-300"
          href="/login"
        >
          Sign In
        </Link>

      </div>

    </nav>
  )
}
