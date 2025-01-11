import Link from "next/link";
import ShoppingCart from "./ShoppingCart";
import { FaCartShopping } from "react-icons/fa6";
import UserInfo from "./UserInfo";
import NavbarList from "./NavbarList";

export default async function Navbar() {

  return (
    <nav className="h-[12vh] flex-between text-gray">

      <Link href="/" className="text-36-bold text-tomato">Tomato.</Link>

      <NavbarList />

      <div className="flex-center gap-x-6">

        <div className="relative">

          <Link href="/cart">
            <FaCartShopping className="text-[30px] cursor-pointer" />
          </Link>

          <ShoppingCart />

        </div>

        <UserInfo />

      </div>

    </nav>
  )
}
