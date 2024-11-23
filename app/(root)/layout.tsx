import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import StoreProvider from "./StoreProvider";
import ReduxInitializer from "./ReduxInitializer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="text-lg md:text-xl lg:text-2xl">

            <section className="w-[80vw] mx-auto">

                <Navbar />

                <StoreProvider>

                    <ReduxInitializer>

                        {children}

                    </ReduxInitializer>

                </StoreProvider>

            </section>

            <section>

                <Footer />

            </section>

        </main>
    )
}
