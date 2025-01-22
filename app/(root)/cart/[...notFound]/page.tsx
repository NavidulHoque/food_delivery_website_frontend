import Heading from "@/components/notFound/Heading";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-[82vh] py-5 flex-column items-center justify-center gap-y-3">

            <Heading />
            <Link
                href="/cart"
                className='bg-tomato hover:bg-tomato/90 text-white px-4 py-2 rounded-md'
            >
                Return to Cart Page
            </Link>

        </section>
    )
}