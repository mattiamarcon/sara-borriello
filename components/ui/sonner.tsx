"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {


  return (
    <Sonner
      className="toaster group z-[100]"
      {...props}
    />
  )
}

export { Toaster }
