import { useShoppingCart } from "@/state/shoppingCartStore";
import { Product } from "@/types/app.types";
import { useState } from "react";

const useHandleProducts = () => {
  const { addItem, removeItem } = useShoppingCart();

  const handleAddItem = (item: Product) => {
    addItem(item);
  };

  const handleRemoveItem = (item: Product) => {
    removeItem(item);
  };

  return {
    handleAddItem,
    handleRemoveItem,
  };
};

export default useHandleProducts;
