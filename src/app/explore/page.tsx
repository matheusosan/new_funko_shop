import React, { Suspense } from "react";
import Loading from "./loading";
import FunkosList from "@/components/FunkosList";

const page = async () => {
  return (
    <div className="flex items-center justify-center py-16 md:p-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:w-3/4">
        <Suspense fallback={<Loading />}>
          <FunkosList />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
