"use client"

import { Item, navbarList } from "@/data/navbarList"
import useRefCustom from "@/hooks/useRefCustom"
import { handleScroll } from "@/lib/utils"

export default function NavbarList() {

    const { menuRef, contactRef} = useRefCustom()

    const handleRef = (label: string) => {

        if (label === "menu") {

            handleScroll(menuRef)
        }

        else if (label === "contact us") {

            handleScroll(contactRef)
        }
    }

    return (
        <ul className="md:flex-center hidden gap-x-10">

            {navbarList.map((item: Item) => (

                <li
                    key={item.label}
                    className="hover:border-b-2 hover:border-gray cursor-pointer"
                    onClick={() => handleRef(item.label)}
                >
                    {item.label}

                </li>

            ))}

        </ul>
    )
}
