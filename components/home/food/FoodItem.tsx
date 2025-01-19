import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AddToCartButton from './AddToCartButton'
import { Food } from "@/lib/type" 
import Image from "next/image"


export default function FoodItem({ food }: { food: Food}) {
  return (
    <Card className='border-none border-[0px] shadow-[0_0_10px_#00000015] hover-scale relative'>

      <AddToCartButton foodName={food.name} />

      <Image
        src={food.image}
        alt={food.name}
        className='rounded-t-lg w-full'
        width={300}
        height={222}
      />

      <CardHeader>
        <CardTitle>{food.name}</CardTitle>
      </CardHeader>

      <CardContent className='flex-column gap-y-3'>

        <CardDescription className='text-[18px] leading-7'>{food.description}</CardDescription>

        <span className='text-tomato'>{food.price}$</span>

      </CardContent>

    </Card>
  )
}
