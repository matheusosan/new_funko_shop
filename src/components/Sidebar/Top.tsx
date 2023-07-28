import React from "react";
import { useSidebar } from "@/state";

const Top = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex items-center">
      <button
        className="ml-5 h-16 left-0 text-3xl
            "
        onClick={() => toggleSidebar()}
      >
        X
      </button>
      <h2 className="ml-6 text-2xl">CARRINHO</h2>
    </div>
  );
};

export default Top;
