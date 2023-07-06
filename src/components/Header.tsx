"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import * as I from "react-icons/bs";
import { useSidebar } from "@/state";

const Header = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <header className="flex items-center justify-between w-full p-7 h-[8vh] bg-blue-900">
      <Link href="/" className="text-white">
        Home
      </Link>
      <Link className="text-white" href="/explore">
        Shop
      </Link>
      <I.BsFillCartPlusFill
        onClick={() => toggleSidebar()}
        size={24}
        color="white"
      />

      {isOpen && <Sidebar />}
    </header>
  );
};

export default Header;
