import { auth } from "@/auth";
import Order from "@/components/myOrders/Order";
import { url } from "@/url";
import axios from "axios";
import RealTimeCommunicationOrder from "../../../components/myOrders/RealTimeCommunicationOrder";
import { OrderObj } from "@/lib/type";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "My Orders - Tomato",
    description: "Check your orders from this page",
};

export default async function MyOrders() {

    const session = await auth();

    const { data: { orders } } = await axios.get(url + `/order/userOrders/${session?.user.id}/user`);

    return (
        <>
            <RealTimeCommunicationOrder />
            <section className="min-h-[82vh] py-8 space-y-5">

                {orders.length === 0 ? (
                    <div className="flex-center">
                        <h1 className="text-tomato text-36-semibold">No orders to show</h1>
                    </div>
                ) : (
                    <>
                        <h1 className="text-28-semibold">My Orders</h1>
                        {orders.map((order: OrderObj) => (
                            <Order key={order.id} order={order} />
                        ))}
                    </>
                )}

            </section>
        </>
    )
}
