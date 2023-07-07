"use client";

import Button from "@/components/Button";
import React from "react";
import { useShoppingCart } from "@/state";

interface DescriptionProps {
  id: number;
  title: string;
  price: number;
  images: {
    icon1: string;
  };
}

const ProductDescription = ({ id, title, price, images }: DescriptionProps) => {
  const { addItem } = useShoppingCart();

  return (
    <div className="flex flex-col justify-between w-[380px] gap-5 p-4 border-zinc-200 border-2 rounded-md">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        exercitationem itaque iure rerum dolor eligendi sit dolorem ipsam, quos
        necessitatibus.
      </p>
      <p>R${price}</p>
      <Button
        className="bg-blue-700 text-white font-bold text-xl p-4 rounded-md cursor-pointer"
        content="Adicionar ao Carrinho"
        onClick={() =>
          addItem({
            id,
            images,
            price,
            title,
          })
        }
      />
    </div>
  );
};

export default ProductDescription;
