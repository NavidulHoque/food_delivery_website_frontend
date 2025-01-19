"use client"

import useRefCustom from "@/hooks/useRefCustom"

export default function MenuWrapper({ children }: { children: React.ReactNode }) {

    const { menuRef } = useRefCustom()

  return (
    <div ref={menuRef} className="flex-column gap-y-10">
      {children}
    </div>
  )
}
