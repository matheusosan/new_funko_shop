import React from "react";
import ProductsInCart from "@/components/cart/ProductsInCart";
import EmptyCart from "@/components/cart/EmptyCart";

const Page = () => {
  return (
    <div className="flex items-center justify-center">
      <ProductsInCart />
      <EmptyCart />
    </div>
  );
};

export default Page;
