"use client"

import { Button } from "../ui/button";

export default function HeroButton() {
  return (
    <Button 
      onClick={() => console.log("sdfhg")} 
      className="text-gray text-[18px] bg-white px-7 rounded-full hover-scale"
      size="lg"
    >
      View Menu
    </Button>
  )
}
