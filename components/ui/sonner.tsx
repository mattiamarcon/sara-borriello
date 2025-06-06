"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {


  return (
    <Sonner
      className="toaster group z-[100] bg-white text-black text-xl"
      {...props}
    />
  )
}

export { Toaster }
