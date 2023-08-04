"use client";

import { useShoppingCart } from "@/state";
import React from "react";

const EmptyCart = () => {
  const { cart } = useShoppingCart();

  return (
    <>
      {cart.length <= 0 && (
        <h2 className="text-3xl font-bold">Não há itens no carrinho</h2>
      )}
    </>
  );
};

export default EmptyCart;
