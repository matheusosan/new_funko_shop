"use client";

import React from "react";
import * as I from "react-icons/fa";
import { useShoppingCart, useSidebar } from "@/state/index";
import ProductsLIst from "./explore/ProductsLIst";

const Sidebar = () => {
  const { cart } = useShoppingCart();
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <aside className="flex flex-col justify-between w-[500px] fixed right-0 top-0 h-screen bg-white">
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

        <div className="flex flex-col w-full flex-1 items-center justify-center h-1/4">
          <div className="flex justify-between w-full">
            <p>Subtotal</p>
            <p>R$600,00</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Total</p>
            <p>R$600,00</p>
          </div>
          <button>FECHAR PEDIDO</button>
          <button>CONTINUAR COMPRANDO</button>
        </div>
        {cart.length <= 0 && (
          <div className="flex flex-col items-center justify-center absolute right-1/2 translate-x-1/2 gap-8">
            <I.FaShoppingCart size={64} color="#979899" />
            <h2>Seu carrinho está vazio.</h2>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
