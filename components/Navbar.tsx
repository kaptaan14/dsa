"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const emoji: any = [
    "😀",
    "😎",
    "😍",
    "🥳",
    "😵‍💫",
    "🧐",
    "😢",
    "😍",
    "🫨",
    "😜",
    "🤪",
    "🤓",
    "😣",
    "😇",
    "🙂",
    "🥲",
  ];

  const [emo, setEmo] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    const num = emoji[Math.floor(Math.random() * emoji.length)];
    setEmo(num);
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`flex flex-row  justify-between sm:justify-around p-5 border border-black w-screen bg-white fixed top-0 z-50`}>
      {!menuOpen && (
        <div className="cursor-pointer">
          <Link href={"/"}>
            {" "}
            <h1 className="text-3xl font-bold">DSA</h1>
          </Link>
        </div>
      )}
      <div className={`sm:hidden cursor-pointer flex items-center`} onClick={toggleMenu}>
        {!menuOpen ? (
          <Image width={20}
          height={20} src="/hamburger.svg" alt="" />
        ) : (
          <Image width={20}
          height={20} src="/cross.svg" alt="" />
        )}
      </div>
      <div
        className={`flex-col sm:flex-row ${
          menuOpen ? "flex" : "hidden"
        }  sm:flex gap-10 items-center justify-center sm:justify-end underline`}
      >
        <Link href={"/dsa"}>DSA</Link>
        <Link href={"/courses"}>Courses</Link>
        <Link href={"/projects"}>Projects</Link>
      </div>
      <h1 className="hidden sm:flex text-3xl text-center cursor-pointer">
        {emo}
      </h1>
    </div>
  );
};

export default Navbar;
