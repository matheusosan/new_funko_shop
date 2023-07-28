"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar/Sidebar";
import * as I from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
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
      <button onClick={() => toggleSidebar()}>
        <I.AiOutlineShoppingCart size={26} color="white" />
      </button>

      <AnimatePresence>{isOpen && <Sidebar />}</AnimatePresence>
    </header>
  );
};

export default Header;
