import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <div className="relative w-full lg:h-[600px] h-[400px] bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: 'url("/hero_img.png")' }}>

      <div className="absolute top-[150px] sm:left-[80px] left-[40px] min-[1150px]:w-full w-[70%] text-white space-y-6">

        <h1 className="min-[880px]:text-60-semibold text-36-semibold">Order your <br /> favorite food here</h1>

        <p className="pt-[10px] lg:block hidden">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest <br /> ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your <br /> dining experience, one delicious meal at a time.</p>

        <HeroButton />

      </div>

    </div>
  )
}
