"use client";

import { useShoppingCart } from "@/state/shoppingCartStore";
import { IFunkos } from "@/types/app.types";
import { useState } from "react";

const useAlert = () => {
  const { addItem, removeItem } = useShoppingCart();

  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleAddItem = (item: IFunkos) => {
    addItem(item);
    setAlertMessage(`Produto adicionado ao carrinho.`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage("");
    }, 5000);
  };

  const handleRemoveItem = (item: IFunkos) => {
    removeItem(item);
    setAlertMessage(`Produto removido do carrinho.`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage("");
    }, 5000);
  };

  return {
    handleAddItem,
    handleRemoveItem,
    alertMessage,
    showAlert,
  };
};

export default useAlert;
