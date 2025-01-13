import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import CartProvider from "@/context/CartProvider";

export interface User {
    email: string;
    username: string;
    photo: string;
    provider: string;
    cart: { [key: string]: number };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <main className="text-lg md:text-xl lg:text-2xl">

            <section className="w-[80vw] mx-auto">

                <CartProvider>

                    <Navbar />

                    {children}

                </CartProvider>

            </section>

            <section>

                <Footer />

            </section>

        </main>
    )
}
