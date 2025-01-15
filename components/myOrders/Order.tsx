import { OrderObj } from "@/app/(root)/myOrders/page"
import parcel from "@/public/parcel_icon.png"
import Image from "next/image"

export default function Order({ order }: { order: OrderObj }) {
    return (
        <div className="grid grid-cols-[0.3fr_2fr_3fr] items-center w-full border-tomato border-2 p-4">

            <Image src={parcel} alt="parcel" />

            <p className="order_texts">
                {order.foodItems.map((food, i, array) => (
                    <span key={food._id}>{food.name} x {food.quantity}{array.length !== i + 1 && ","} </span>
                ))}
            </p>

            <div className="grid grid-cols-[1fr_1fr_1fr]">

                <p className="order_texts">${order.totalPrice}</p>

                <p className="order_texts">Items: {order.foodItems.length}</p>

                <p className="order_texts flex-center gap-x-3">
                    <span className="inline-block min-w-2 min-h-2 bg-tomato rounded-full"></span>
                    <span>{order.status}</span>
                </p>

            </div>

        </div>
    )
}
