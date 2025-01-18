"use client"

import { Item, navbarList } from "@/data/navbarList"
import { useState } from "react"

export default function NavbarList() {

    const [selectedItem, setSelectedItem] = useState("home")

    return (
        <ul className="md:flex-center hidden gap-x-10">

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
    )
}
