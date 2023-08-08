"use client";

import * as I from "react-icons/ai";

import React from "react";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const { push } = useRouter();

  return (
    <button
      className="absolute top-1/2 left-1/2 md:top-1/4 md:left-1/4"
      onClick={() => push("/explore")}
    >
      <I.AiFillLeftCircle size={50} />
    </button>
  );
};

export default GoBack;
