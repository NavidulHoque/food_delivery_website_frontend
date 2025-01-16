import Image from "next/image";
import hero_img from "@/public/hero_img.png"
import HeroButton from "./HeroButton";


export default function Hero() {
  return (
    <div className="relative w-full h-[600px]">

      <Image
        src={hero_img}
        alt="hero"
        fill
        quality={100}
        priority={true}
      />

      <div className="absolute top-[170px] left-[80px] text-white space-y-6">

        <h1 className="text-60-semibold">Order your <br /> favorite food here</h1>

        <p className="pt-[10px]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest <br /> ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your <br /> dining experience, one delicious meal at a time.</p>

        <HeroButton />

      </div>
      
    </div>
  )
}
