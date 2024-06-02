"use client"

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center pt-24  w-full h-screen">
        <div className="text-3xl font-bold flex items-center justify-center p-2">
          Top DSA Sheets To Crack Any Coding Interview
        </div>
        <div>
          <p>Start your DSA journey today with us.</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <Image className="mt-10" width={300}
          height={300} src="/wip.svg" alt="" />
          <p>This site is currently in progress. <span className="text-4xl">🚧</span></p>
        </div>
        
      </div>
    </> 
  );
}
