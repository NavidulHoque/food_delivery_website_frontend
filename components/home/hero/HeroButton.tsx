"use client"

import { Button } from "@/components/ui/button"
import useRefCustom from "@/hooks/useRefCustom"

export default function HeroButton() {

  const { menuRef } = useRefCustom()

  const handleScroll = () => {
    
    if (menuRef.current) {

      setTimeout(() => {

        if (menuRef.current) {
          menuRef.current.scrollIntoView({ behavior: 'smooth' })
        }

      }, 0)
    }
  }

  return (
    <Button
      onClick={handleScroll}
      className="text-gray text-[18px] bg-white px-7 rounded-full hover-scale"
      size="lg"
    >
      View Menu
    </Button>
  )
}
