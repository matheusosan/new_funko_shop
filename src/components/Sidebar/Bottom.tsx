import React from "react";
import { useShoppingCart, useSidebar } from "@/state";
import { useRouter } from "next/navigation";

const Bottom = () => {
  const { cart } = useShoppingCart();
  const { toggleSidebar } = useSidebar();
  const router = useRouter();

  return (
    <>
      {cart.length >= 1 && (
        <div
          key={0}
          className="flex flex-col w-full items-center justify-center gap-4 py-6 px-8 border-t-2 border-slate-300/80"
        >
          <div className="flex justify-between w-full">
            <p>Subtotal</p>
            <p>R$600,00</p>
          </div>
          <div className="flex justify-between w-full">
            <p className="font-bold text-xl">Total</p>
            <p className="font-bold text-xl">
              R$
              {cart.reduce((total, current) => {
                return total + parseInt(current.item.price) * current.quantity;
              }, 0)}
            </p>
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
    </>
  );
};

export default Bottom;
