/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useShoppingCart } from "@/state/shoppingCartStore";
import { BsTrashFill } from "react-icons/bs";
import Link from "next/link";

const Page = () => {
  const { cart, incrementQuantity, decrementQuantity, removeItem } =
    useShoppingCart();

  return (
    <div className="flex items-center justify-center h-full">
      {cart.length >= 1 ? (
        <div className="flex flex-col w-[760px]">
          {cart.map((product) => (
            <div
              className="flex items-center justify-around border-b-2 border-black"
              key={product.item.id}
            >
              <Link href={`/explore/${product.item.id}`}>
                <img
                  className="w-[100px] h-[130px] cursor-pointer"
                  src={product.item.images.icon1}
                  alt={product.item.title}
                />
              </Link>
              <div className="flex flex-col items-center">
                <h2 className="font-bold">Produto</h2>
                <p className="w-[200px] text-center">{product.item.title}</p>
              </div>

              <div className="flex flex-col items-center">
                <h2 className="font-bold">Quantidade</h2>
                <div className="flex items-center gap-2">
                  <span
                    className="text-2xl cursor-pointer"
                    onClick={() => decrementQuantity(product.item)}
                  >
                    -
                  </span>
                  <p className="text-xl">{product.quantity}</p>
                  <span
                    className="text-2xl cursor-pointer"
                    onClick={() => incrementQuantity(product.item)}
                  >
                    +
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h2 className="font-bold">Preço total</h2>
                <p>R${(product.quantity * product.item.price).toFixed(2)}</p>
              </div>

              <BsTrashFill
                className="cursor-pointer"
                size={20}
                onClick={() => removeItem(product.item)}
              />
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-3xl font-bold">Não há itens no carrinho</h2>
      )}
    </div>
  );
};

export default Page;
