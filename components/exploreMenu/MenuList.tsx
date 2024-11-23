"use client"

import { Menu, menuList } from "@/data/menuList";
import Image from 'next/image';
import useCategory from "@/hooks/useCategory";

export default function MenuList() {

    const {category, setCategory} = useCategory()

    return (
        <div className="flex gap-x-5">

            {menuList.map((item: Menu) => (

                <div key={item.menu_name} className="flex-column items-center gap-y-4">

                    <Image
                        src={item.menu_image}
                        alt="menu"
                        className={`${category === item.menu_name ? "border-4 border-tomato rounded-full transition-all duration-150" : ""} cursor-pointer`}
                        quality={100}
                        onClick={() => setCategory(item.menu_name)}
                    />

                    <span className="text-[#808080]">{item.menu_name}</span>

                </div>

            ))}

        </div>
    )
}
