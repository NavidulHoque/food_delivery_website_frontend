"use client"

import { Menu, menuList } from "@/data/menuList";
import Image from 'next/image';
import { useState } from "react";

export default function ExploreMenu() {

    const [category, setCategory] = useState("")

    return (
        <div className="flex-column gap-y-7">

            <h2 className="text-[#262626] text-36-medium">Explore our menu</h2>

            <p className="text-[#262626] text-[20px]">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your <br /> cravings and elevate your dining experience, one delicious meal at a time.</p>

            <div className="flex gap-x-5">

                {menuList.map((list: Menu) => (

                    <div key={list.menu_name} className="flex-column items-center gap-y-4">

                        <Image
                            src={list.menu_image}
                            alt="menu"
                            className={`${category === list.menu_name ? "border-4 border-tomato rounded-full transition-all duration-150" : ""} cursor-pointer`}
                            quality={100}
                            onClick={() => setCategory(list.menu_name)}
                        />

                        <span className="text-[#808080]">{list.menu_name}</span>

                    </div>

                ))}

            </div>

            <hr className="bg-[#e2e2e2] h-[3px] border-none" />

        </div>
    )
}
