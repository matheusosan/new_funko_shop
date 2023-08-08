"use client";

import React from "react";
import Link from "next/link";
import * as I from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import { useShoppingCart, useSidebar } from "@/state";
import { SidebarProvider } from "./Sidebar";

const Header = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const { cart } = useShoppingCart();

  return (
    <header className="flex items-center justify-between w-full p-7 h-[8vh] bg-blue-900">
      <Link href="/" className="text-white">
        Home
      </Link>
      <Link className="text-white" href="/explore">
        Shop
      </Link>
      <button
        className="flex items-center gap-2"
        onClick={() => toggleSidebar()}
      >
        <I.AiOutlineShoppingCart size={26} color="white" />
        <span className="text-white">{cart.length}</span>
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
