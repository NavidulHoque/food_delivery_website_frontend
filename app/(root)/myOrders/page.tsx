import { auth } from "@/auth"
import { Food } from "@/components/food/FoodDisplayServer";
import Order from "@/components/myOrders/Order"
import { url } from "@/url"
import axios from "axios"

export interface OrderObj{
    id: string;
    foodItems: Food[];
    totalPrice: number;
    status: string;
}

export default async function MyOrders() {

    const session = await auth()

    const {data: {orders}} = await axios.get(url + `/order/userOrders/${session?.user.id}`)

    return (
        <section className="min-h-[82vh] py-8 space-y-5">

            <h1 className="text-28-semibold">My Orders</h1>

            {orders.map((order: OrderObj) => (
                <Order key={order.id} order={order} />
            ))}

        </section>
    )
}
