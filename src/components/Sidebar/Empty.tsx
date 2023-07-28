import React from "react";
import * as I from "react-icons/fa";
import { useShoppingCart } from "@/state";

const Empty = () => {
  const { cart } = useShoppingCart();

  return (
    <>
      {cart.length <= 0 && (
        <div className="flex flex-col items-center justify-center absolute right-1/2 bottom-1/2 translate-y-1/2 translate-x-1/2 gap-8">
          <I.FaShoppingCart size={64} color="#818283" />
          <h2 className="text-lg">Seu carrinho está vazio.</h2>
        </div>
      )}
    </>
  );
};

export default Empty;
