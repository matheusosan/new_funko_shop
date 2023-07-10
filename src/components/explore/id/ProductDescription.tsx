"use client";

import Button from "@/components/Button";
import React from "react";
import useAlert from "@/hooks/useAlert";

interface DescriptionProps {
  id: number;
  title: string;
  price: number;
  images: {
    icon1: string;
  };
}

const ProductDescription = ({ id, title, price, images }: DescriptionProps) => {
  const { handleAddItem } = useAlert();

  return (
    <div className="flex flex-col justify-between items-center w-[380px] gap-5 p-4 border-zinc-200 border-2 rounded-md">
      <h2 className="text-center text-2xl md:text-left md:text-3xl font-bold">
        {title}
      </h2>
      <p className="text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        exercitationem itaque iure rerum dolor eligendi sit dolorem ipsam, quos
        necessitatibus.
      </p>
      <p>R${price}</p>
      <Button
        className="bg-blue-700 text-white font-bold text-xl p-4 rounded-md cursor-pointer"
        content="Adicionar ao Carrinho"
        onClick={() =>
          handleAddItem({
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
