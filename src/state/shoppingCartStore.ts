import { ShoppingCartState } from "@/types/app.types";
import { create } from "zustand";

export const useShoppingCart = create<ShoppingCartState>((set) => ({
  cart: [],
  addItem: (item) => {
    set((state) => {
      const existingItem = state.cart.find((i) => i.item.id === item.id);

      if (existingItem) {
        const updatedCart = state.cart.map((i) => {
          if (i.item.id === item.id) {
            return {
              ...i,
              quantity: i.quantity + 1,
            };
          }
          return i;
        });

        return { cart: updatedCart };
      }

      return { cart: [...state.cart, { item, quantity: 1 }] };
    });
  },

  removeItem: (item) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.item.id !== item.id),
    })),

  incrementQuantity: (item) =>
    set((state) => {
      const updatedCart = state.cart.map((i) => {
        if (i.item.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        }
        return i;
      });

      return { cart: updatedCart };
    }),
  decrementQuantity: (item) =>
    set((state) => {
      const updatedCart = state.cart.map((i) => {
        if (i.item.id === item.id) {
          return {
            ...i,
            quantity: i.quantity - 1,
          };
        }
        return i;
      });

      return { cart: updatedCart.filter((i) => i.quantity > 0) };
    }),
}));
