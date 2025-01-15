import Link from "next/link";

export default function CashMemo({subTotal, isRedirect}: {subTotal: number, isRedirect: boolean}) {

    return (
        <div className={`flex ${!isRedirect ? "w-[47%]" : ""}`}>

            <div className={`${!isRedirect ? "w-full" : "w-[50%]"} space-y-5`}>

                <h1 className="text-28-semibold">Cart Totals</h1>

                <div className="flex-column gap-y-2">

                    <div className="flex-between">

                        <span className="">Subtotal</span>
                        <span>${subTotal}</span>

                    </div>

                    <hr />

                </div>

                <div className="flex-column gap-y-2">

                    <div className="flex-between">

                        <span>Delivery fee</span>
                        <span>$2</span>

                    </div>

                    <hr />

                </div>

                <div className="flex-column">

                    <div className="flex-between">

                        <span className="font-medium">Total</span>
                        <span>${subTotal + 2}</span>

                    </div>

                </div>

                {isRedirect && (

                    <Link 
                        href="/placeOrder" 
                        className="bg-tomato hover:bg-tomato/90 text-white px-4 py-3 inline-block rounded-md"
                    >
                        Place Order
                    </Link>

                )}

            </div>

        </div>
    )
}
