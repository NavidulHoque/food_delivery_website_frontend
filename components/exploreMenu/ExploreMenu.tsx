import MenuList from "./MenuList";

export default function ExploreMenu() {

    return (
        <div className="flex-column gap-y-7">

            <h2 className="text-[#262626] text-36-medium">Explore our menu</h2>

            <p className="text-[#262626] text-[20px]">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your <br /> cravings and elevate your dining experience, one delicious meal at a time.</p>

            <MenuList />

            <hr className="bg-[#e2e2e2] h-[3px] border-none" />

        </div>
    )
}
