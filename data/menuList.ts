import menu_1 from '@/public/menu_1.png'
import menu_2 from '@/public/menu_2.png'
import menu_3 from '@/public/menu_3.png'
import menu_4 from '@/public/menu_4.png'
import menu_5 from '@/public/menu_5.png'
import menu_6 from '@/public/menu_6.png'
import menu_7 from '@/public/menu_7.png'
import menu_8 from '@/public/menu_8.png'
import { StaticImageData } from 'next/image'

export interface Menu{
    menu_name: string;
    menu_image: StaticImageData;
}

export const menuList: Menu[] = [
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Deserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    }
]