import React from "react";

import { useShoppingCart } from "@/state";
import * as I from "react-icons/bs";
import Image from "next/image";

const Content = () => {
  const { cart, decrementQuantity, incrementQuantity, removeItem } =
    useShoppingCart();

  return (
    <>
      {cart.length >= 1 && (
        <div className="flex flex-col">
          <div className="overflow-y-auto h-[500px]">
            {cart.map((product) => (
              <div
                key={product.item.id}
                className="flex items-center justify-center flex-1 p-3"
              >
                <div className="flex items-center w-full border-b-2 border-slate-200/75">
                  <Image
                    width={920}
                    height={480}
                    src={product.item.images[0].url}
                    alt=""
                    className="w-[80px] h-[130px]"
                  />
                  <div className="flex flex-col items-center justify-center w-3/4">
                    <h2 className="text-center">{product.item.title}</h2>
                    <div className="flex justify-between items-center w-3/4">
                      <span className="flex items-center justify-center gap-3 text-xl">
                        <button onClick={() => decrementQuantity(product.item)}>
                          -
                        </button>
                        <p>{product.quantity}</p>
                        <button onClick={() => incrementQuantity(product.item)}>
                          +
                        </button>
                      </span>
                      <p className="font-bold">
                        R$
                        {(
                          product.quantity * parseInt(product.item.price)
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <I.BsTrashFill
                    className="cursor-pointer"
                    onClick={() => removeItem(product.item)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
