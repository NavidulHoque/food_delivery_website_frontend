import food_1 from '@/public/food_1.png'
import food_2 from '@/public/food_2.png'
import food_3 from '@/public/food_3.png'
import food_4 from '@/public/food_4.png'
import food_5 from '@/public/food_5.png'
import food_6 from '@/public/food_6.png'
import food_7 from '@/public/food_7.png'
import food_8 from '@/public/food_8.png'
import food_9 from '@/public/food_9.png'
import food_10 from '@/public/food_10.png'
import food_11 from '@/public/food_11.png'
import food_12 from '@/public/food_12.png'
import food_13 from '@/public/food_13.png'
import food_14 from '@/public/food_14.png'
import food_15 from '@/public/food_15.png'
import food_16 from '@/public/food_16.png'
import food_17 from '@/public/food_17.png'
import food_18 from '@/public/food_18.png'
import food_19 from '@/public/food_19.png'
import food_20 from '@/public/food_20.png'
import food_21 from '@/public/food_21.png'
import food_22 from '@/public/food_22.png'
import food_23 from '@/public/food_23.png'
import food_24 from '@/public/food_24.png'
import food_25 from '@/public/food_25.png'
import food_26 from '@/public/food_26.png'
import food_27 from '@/public/food_27.png'
import food_28 from '@/public/food_28.png'
import food_29 from '@/public/food_29.png'
import food_30 from '@/public/food_30.png'
import food_31 from '@/public/food_31.png'
import food_32 from '@/public/food_32.png'
import { StaticImageData } from 'next/image'


export interface Food {
    id: string;
    name: string;
    image: StaticImageData;
    price: number;
    description: string;
    category: string;
}


export const foodList: Food[] = [
    {
        id: "1",
        name: "Greek salad",
        image: food_1,
        price: 12,
        description: "A classic mix of fresh veggies and feta cheese.",
        category: "Salad"
    },
    {
        id: "2",
        name: "Veg salad",
        image: food_2,
        price: 18,
        description: "A healthy blend of fresh garden vegetables.",
        category: "Salad"
    },
    {
        id: "3",
        name: "Clover Salad",
        image: food_3,
        price: 16,
        description: "A refreshing salad with clover and mixed greens.",
        category: "Salad"
    },
    {
        id: "4",
        name: "Chicken Salad",
        image: food_4,
        price: 24,
        description: "Grilled chicken mixed with fresh salad greens.",
        category: "Salad"
    },
    {
        id: "5",
        name: "Lasagna Rolls",
        image: food_5,
        price: 14,
        description: "Rolled lasagna with a cheesy filling.",
        category: "Rolls"
    },
    {
        id: "6",
        name: "Peri Peri Rolls",
        image: food_6,
        price: 12,
        description: "Spicy rolls with peri peri flavors.",
        category: "Rolls"
    },
    {
        id: "7",
        name: "Chicken Rolls",
        image: food_7,
        price: 20,
        description: "Juicy chicken wrapped in soft rolls.",
        category: "Rolls"
    },
    {
        id: "8",
        name: "Veg Rolls",
        image: food_8,
        price: 15,
        description: "Delicious rolls filled with veggies.",
        category: "Rolls"
    },
    {
        id: "9",
        name: "Ripple Ice Cream",
        image: food_9,
        price: 14,
        description: "Creamy ice cream with a fruity ripple.",
        category: "Deserts"
    },
    {
        id: "10",
        name: "Fruit Ice Cream",
        image: food_10,
        price: 22,
        description: "Ice cream with a mix of fresh fruit flavors.",
        category: "Deserts"
    },
    {
        id: "11",
        name: "Jar Ice Cream",
        image: food_11,
        price: 10,
        description: "Creamy ice cream served in a jar.",
        category: "Deserts"
    },
    {
        id: "12",
        name: "Vanilla Ice Cream",
        image: food_12,
        price: 12,
        description: "Classic and creamy vanilla flavor.",
        category: "Deserts"
    },
    {
        id: "13",
        name: "Chicken Sandwich",
        image: food_13,
        price: 12,
        description: "Grilled chicken served in a toasted sandwich.",
        category: "Sandwich"
    },
    {
        id: "14",
        name: "Vegan Sandwich",
        image: food_14,
        price: 18,
        description: "A delicious plant-based sandwich option.",
        category: "Sandwich"
    },
    {
        id: "15",
        name: "Grilled Sandwich",
        image: food_15,
        price: 16,
        description: "A sandwich with a perfectly grilled filling.",
        category: "Sandwich"
    },
    {
        id: "16",
        name: "Bread Sandwich",
        image: food_16,
        price: 24,
        description: "Simple yet satisfying bread sandwich.",
        category: "Sandwich"
    },
    {
        id: "17",
        name: "Cup Cake",
        image: food_17,
        price: 14,
        description: "A soft, fluffy mini cake.",
        category: "Cake"
    },
    {
        id: "18",
        name: "Vegan Cake",
        image: food_18,
        price: 12,
        description: "A deliciously moist plant-based cake.",
        category: "Cake"
    },
    {
        id: "19",
        name: "Butterscotch Cake",
        image: food_19,
        price: 20,
        description: "Rich cake with a butterscotch flavor.",
        category: "Cake"
    },
    {
        id: "20",
        name: "Sliced Cake",
        image: food_20,
        price: 15,
        description: "Delicious cake slices, ready to enjoy.",
        category: "Cake"
    },
    {
        id: "21",
        name: "Garlic Mushroom",
        image: food_21,
        price: 14,
        description: "Sautéed mushrooms with a garlic twist.",
        category: "Pure Veg"
    },
    {
        id: "22",
        name: "Fried Cauliflower",
        image: food_22,
        price: 22,
        description: "Crispy and golden fried cauliflower.",
        category: "Pure Veg"
    },
    {
        id: "23",
        name: "Mix Veg Polao",
        image: food_23,
        price: 10,
        description: "A mix of veggies and rice for a tasty polao.",
        category: "Pure Veg"
    },
    {
        id: "24",
        name: "Rice Zucchini",
        image: food_24,
        price: 12,
        description: "Savory zucchini and rice dish.",
        category: "Pure Veg"
    },
    {
        id: "25",
        name: "Cheese Pasta",
        image: food_25,
        price: 12,
        description: "Creamy pasta with melted cheese.",
        category: "Pasta"
    },
    {
        id: "26",
        name: "Tomato Pasta",
        image: food_26,
        price: 18,
        description: "Pasta tossed in a rich tomato sauce.",
        category: "Pasta"
    },
    {
        id: "27",
        name: "Creamy Pasta",
        image: food_27,
        price: 16,
        description: "Smooth and creamy pasta.",
        category: "Pasta"
    },
    {
        id: "28",
        name: "Chicken Pasta",
        image: food_28,
        price: 24,
        description: "Pasta with tender chicken pieces.",
        category: "Pasta"
    },
    {
        id: "29",
        name: "Butter Noodles",
        image: food_29,
        price: 14,
        description: "Noodles cooked in butter for a savory taste.",
        category: "Noodles"
    },
    {
        id: "30",
        name: "Veg Noodles",
        image: food_30,
        price: 12,
        description: "Noodles loaded with fresh veggies.",
        category: "Noodles"
    },
    {
        id: "31",
        name: "Somen Noodles",
        image: food_31,
        price: 20,
        description: "Thin, delicate Japanese noodles.",
        category: "Noodles"
    },
    {
        id: "32",
        name: "Cooked Noodles",
        image: food_32,
        price: 15,
        description: "Flavorful and cooked to perfection.",
        category: "Noodles"
    }
]
