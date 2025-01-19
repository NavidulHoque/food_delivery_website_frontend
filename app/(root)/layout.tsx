import ContactWrapper from "@/components/footer/ContactWrapper";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import CartProvider from "@/context/CartProvider";
import RefProvider from "@/context/RefContext";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <main>

            <RefProvider>

                <section className="lg:w-[80vw] w-[90vw] mx-auto">

                    <CartProvider>

                        <Navbar />

                        {children}

                    </CartProvider>

                </section>

                <section>

                    <ContactWrapper>

                        <Footer />

                    </ContactWrapper>

                </section>
                
            </RefProvider>

        </main>
    )
}
