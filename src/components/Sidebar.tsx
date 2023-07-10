"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import * as I from "react-icons/fa";
import { useShoppingCart, useSidebar } from "@/state/index";
import ProductsLIst from "./explore/ProductsLIst";

const Sidebar = () => {
  const { cart } = useShoppingCart();
  const { toggleSidebar } = useSidebar();
  const router = useRouter();

  return (
    <>
      <motion.aside
        className="flex flex-col justify-between  w-[250px] md:w-[500px] fixed right-0 top-0 h-screen bg-white"
        initial={{ opacity: 0, right: "-100%" }}
        animate={{ opacity: 1, right: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, right: "-100%" }}
      >
        <div className="flex flex-col">
          <div className="flex items-center">
            <button
              className="ml-5 h-16 left-0 text-3xl
            "
              onClick={() => toggleSidebar()}
            >
              X
            </button>
            <h2 className="ml-8 text-2xl">CARRINHO</h2>
          </div>
          <div className="overflow-y-auto h-[500px]">
            {cart.length >= 1 && <ProductsLIst />}
          </div>
        </div>

        {cart.length >= 1 && (
          <div className="flex flex-col w-full items-center justify-center gap-4 py-6 px-8 border-t-2 border-slate-300/80">
            <div className="flex justify-between w-full">
              <p>Subtotal</p>
              <p>R$600,00</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-bold text-xl">Total</p>
              <p className="font-bold text-xl">R$600,00</p>
            </div>
            <div className="flex gap-6 w-full">
              <button
                onClick={() => router.push("/cart")}
                className="flex-1 bg-blue-700 py-3 px-4 rounded-lg text-xs font-bold text-white"
              >
                FECHAR PEDIDO
              </button>
              <button
                onClick={() => toggleSidebar()}
                className="flex-1 border-2 border-blue-700 text-xs font-bold text-blue-700 py-3 px-4 rounded-lg"
              >
                CONTINUAR COMPRANDO
              </button>
            </div>
          </div>
        )}
        {cart.length <= 0 && (
          <div className="flex flex-col items-center justify-center absolute right-1/2 translate-x-1/2 gap-8">
            <I.FaShoppingCart size={64} color="#979899" />
            <h2>Seu carrinho está vazio.</h2>
          </div>
        )}
      </motion.aside>
    </>
  );
};

export default Sidebar;
