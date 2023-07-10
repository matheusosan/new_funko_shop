import React from "react";
import FunkosList from "@/components/FunkosList";

export const metadata = {
  title: "Explorar | FunkoShop",
};

const page = () => {
  return (
    <div className="flex items-center justify-center p-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-3/4">
        <FunkosList />
      </div>
    </div>
  );
};

export default page;
