import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex-column w-full h-fit bg-[#374151] text-[#e5e7eb] lg:px-36 px-10 py-7 text-[20px] mt-5">

            <div className="flex sm:flex-row flex-col gap-y-3">

                <div className="flex-column gap-2 justify-center max-[639px]:items-center sm:w-[65%]">

                    <div className="flex items-center max-[639px]:justify-center w-full gap-4">

                        <Image alt="Logo Preview" src="https://tailwind-generator.b-cdn.net/favicon.png" width={80} height={80} />

                        <div className="text-4xl font-bold text-tomato">Tomato.</div>

                    </div>

                    <div className="grid grid-cols-3 gap-6 w-fit p-4">

                        <FaTwitter className="text-blue-500 cursor-pointer size-6" />

                        <FaYoutube className="text-red-500 cursor-pointer size-6" />

                        <FaFacebookSquare className="text-blue-500 cursor-pointer size-6" />

                    </div>

                </div>

                <div className="grid min-[840px]:grid-cols-2 grow justify-self-end text-center sm:text-start">

                    <div className="min-[840px]:flex-column hidden gap-y-4">

                        <h2 className="font-bold uppercase text-[#9ca3af]">Company</h2>

                        <p className="text-[#e5e7eb] hover:underline cursor-pointer">Delivery</p>

                        <p className="text-[#e5e7eb] hover:underline cursor-pointer">Privacy Policy</p>

                    </div>

                    <div className="flex sm:justify-end justify-center min-[840px]:gap-16 text-nowrap">

                        <div className="flex flex-col gap-2">

                            <h2 className="font-bold uppercase text-[#9ca3af] pb-3">Get in Touch</h2>

                            <p className="text-[#e5e7eb] mb-2">+08801700763325</p>

                            <p className="text-[#e5e7eb] mb-2">contact@tomato.com</p>

                        </div>

                    </div>

                </div>

            </div>

            <hr className="w-full border-t border-gray-500 my-8" />

            <div className="text-center">© 2024 Tomato.com - All rights reserved.</div>

        </footer>
    )
}
