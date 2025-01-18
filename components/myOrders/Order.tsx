import { OrderObj } from "@/lib/type"
import parcel from "@/public/parcel_icon.png"
import Image from "next/image"


export default function Order({ order }: { order: OrderObj }) {

    const items = order.foodItems.reduce((acc, cur) => acc += Number(cur.quantity), 0)

    return (
        <div className="grid min-[1161px]:grid-cols-[3fr_2fr] grid-cols-1 gap-y-4 items-center w-full border-tomato border-2 min-[400px]:p-4 p-2">


            <div className="grid min-[1161px]:grid-cols-[0.3fr_2fr] grid-cols-[1fr_5fr] items-center">

                <Image src={parcel} alt="parcel" />

                <p className="text-[#454545] font-medium">
                    {order.foodItems.map((food, i, array) => (
                        <span key={food._id}>{food.name} x {food.quantity}{array.length !== i + 1 && ","} </span>
                    ))}
                </p>

            </div>


            <div className="grid grid-cols-[0.4fr_0.65fr_1.6fr]">

                <p className="text-[#454545]">${order.totalPrice}</p>

                <p className="text-[#454545]">Items: {items}</p>

                <p className="text-[#454545] flex-center gap-x-2">
                    <span className="inline-block min-w-2 min-h-2 bg-tomato rounded-full"></span>
                    <span>{order.status}</span>
                </p>

            </div>

        </div>
    )
}
