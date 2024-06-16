"use client"


import dynamic from "next/dynamic"

const LoveBabbarDsa = dynamic(()=> import("@/components/LoveBabbarDsa"),{
  ssr: false
})

export default function LoveBabbar(){
  return (
    
      <LoveBabbarDsa />
    
  )
}LoveBabbar