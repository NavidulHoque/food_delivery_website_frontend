import { Menu, menuList } from "@/data/menuList";
import ImageComp from "./ImageComp";

export default function ExploreMenu() {

    return (
        <div className="flex-column gap-y-7">

            <h2 className="text-[#262626] text-36-medium">Explore our menu</h2>

            <p className="text-[#262626] text-[20px]">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your <br /> cravings and elevate your dining experience, one delicious meal at a time.</p>

            {/* Menu List */}
            <div className="flex gap-x-5 w-full lg:overflow-x-visible overflow-x-auto">

                
                    {menuList.map((item: Menu) => (
                        <div key={item.menu_name} className="flex flex-col items-center gap-y-4">
                            <ImageComp src={item.menu_image} name={item.menu_name} />
                            <span className="text-[#808080] text-[22px]">{item.menu_name}</span>
                        </div>
                    ))}
                

            </div>

            <hr className="bg-[#e2e2e2] h-[3px] border-none" />

        </div>
    )
}
