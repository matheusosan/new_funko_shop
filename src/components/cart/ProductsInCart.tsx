"use client";

import { useShoppingCart } from "@/state";
import Link from "next/link";
import React from "react";
import { BsTrashFill } from "react-icons/bs";

const ProductsInCart = () => {
  const { cart, decrementQuantity, incrementQuantity, removeItem } =
    useShoppingCart();

  return (
    <>
      {cart.length >= 1 && (
        <div className="flex flex-col w-[760px]">
          {cart.map((product) => (
            <div
              className="flex items-center justify-around border-b-2 border-black"
              key={product.item.id}
            >
              <Link href={`/explore/${product.item.id}`}>
                <img
                  className="w-[100px] h-[130px] cursor-pointer"
                  src={product.item.images[0].url}
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
                <p>
                  R$
                  {(product.quantity * parseInt(product.item.price)).toFixed(2)}
                </p>
              </div>

              <BsTrashFill
                className="cursor-pointer"
                size={20}
                onClick={() => removeItem(product.item)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsInCart;
