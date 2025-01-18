import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import CartProvider from "@/context/CartProvider";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <main>

            <section className="lg:w-[80vw] w-[90vw] mx-auto">

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
