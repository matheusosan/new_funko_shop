import React from "react";

import { useShoppingCart } from "@/state";
import * as I from "react-icons/bs";

const ProductsLIst = () => {
  const { cart, decrementQuantity, incrementQuantity, removeItem } =
    useShoppingCart();

  return (
    <>
      {cart.map((product) => (
        <div
          key={product.item.id}
          className="flex items-center justify-center p-3"
        >
          <div className="flex items-center w-full border-b-2 border-slate-200/75">
            <img
              src={product.item.images.icon1}
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
                  R${(product.item.price * product.quantity).toFixed(2)}
                </p>
              </div>
            </div>
            <I.BsTrashFill onClick={() => removeItem(product.item)} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsLIst;
