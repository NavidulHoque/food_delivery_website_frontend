"use client"

import useCategory from "@/hooks/useCategory";
import Image, { StaticImageData } from "next/image";

export default function ImageComp({src, name}: {src: StaticImageData, name: string}) {

    const { category, setCategory } = useCategory()
    
    return (
        <Image
            src={src}
            alt={name}
            className={`${category === name ? "border-4 border-tomato rounded-full transition-all duration-150" : ""} cursor-pointer`}
            quality={100}
            onClick={() => setCategory(name)}
        />
    )
}
