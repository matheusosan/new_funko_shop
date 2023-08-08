"use client";
import React from "react";
import * as I from "react-icons/bs";
import useAlert from "@/hooks/useHandleProducts";
import { Product } from "@/types/app.types";

const AddToCartButton = ({ itemToAdd }: { itemToAdd: Product }) => {
  const { handleAddItem } = useAlert();

  return (
    <button
      className="bg-blue-900 py-2 px-12 rounded-lg"
      onClick={() => handleAddItem(itemToAdd)}
    >
      {" "}
      <I.BsFillCartPlusFill className="text-white text-xl" />
    </button>
  );
};

export default AddToCartButton;
