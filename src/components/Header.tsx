"use client";

import React from "react";
import Link from "next/link";
import * as I from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import { useSidebar } from "@/state";
import { SidebarProvider } from "./Sidebar";

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

      <AnimatePresence>
        {isOpen && (
          <SidebarProvider.Root>
            <SidebarProvider.Top />
            <SidebarProvider.Content />
            <SidebarProvider.Bottom />
            <SidebarProvider.Empty />
          </SidebarProvider.Root>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
