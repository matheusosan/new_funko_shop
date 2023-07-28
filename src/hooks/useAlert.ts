import { useShoppingCart } from "@/state/shoppingCartStore";
import { Product } from "@/types/app.types";
import { useState } from "react";

const useAlert = () => {
  const { addItem, removeItem } = useShoppingCart();

  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleAddItem = (item: Product) => {
    addItem(item);
    setAlertMessage(`Produto Adicionado ao Carrinho.`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage("");
    }, 3000);
  };

  const handleRemoveItem = (item: Product) => {
    removeItem(item);
    setAlertMessage(`Produto removido do carrinho.`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage("");
    }, 3000);
  };

  return {
    handleAddItem,
    handleRemoveItem,
    alertMessage,
    showAlert,
  };
};

export default useAlert;
