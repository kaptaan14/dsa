"use client"


import dynamic from "next/dynamic"

const LoveBabbarDsa = dynamic(()=> import("@/components/LoveBabbarDsa"),{
  ssr: false
})

export default function LoveBabbar(){
  return (
    <div className="flex px-3 w-full">
      <LoveBabbarDsa />
    </div>
  )
}