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

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`flex flex-row w-full sm:w-screen justify-between sm:justify-around p-5 border border-black bg-white fixed top-0 z-50`}>
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
          <Image width={20} height={20} src="/hamburger.svg" alt="hamburger icon" />
        ) : (
          <Image width={20} height={20} src="/cross.svg" alt="cross icon" />
        )}
      </div>
      <div
        className={`flex-col sm:flex-row ${
          menuOpen ? "flex" : "hidden"
        }  sm:flex gap-10 items-center justify-center sm:justify-end underline`}
      >
        <Link href={"/dsa"} onClick={handleLinkClick}>DSA</Link>
        <Link href={"/courses"} onClick={handleLinkClick}>Courses</Link>
        <Link href={"/projects"} onClick={handleLinkClick}>Projects</Link>
      </div>
      <h1 className="hidden sm:flex text-3xl text-center cursor-pointer">
        {emo}
      </h1>
    </div>
  );
};

export default Navbar;
