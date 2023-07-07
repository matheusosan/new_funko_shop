"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import funkos from "@/services/api";
import useAlert from "@/hooks/useAlert";
import * as I from "react-icons/bs";
import Alert from "./Alert";

const FunkosList = () => {
  const { showAlert, alertMessage, handleAddItem } = useAlert();

  return (
    <>
      {funkos.map((funko, i) => (
        <div
          className="flex flex-col items-center justify-between shadow-2xl rounded-2xl py-6 h-[400px]"
          key={funko.id}
        >
          <Link href={`/explore/${String(funko.id)}`}>
            <Image
              width={1280}
              height={920}
              className="w-[120px] h-[200px] cursor-pointer"
              src={funko.images.icon1}
              alt={funko.title}
            />
          </Link>
          <h2 className="font-bold text-center px-4">{funko.title}</h2>
          <p>R${funko.price}</p>
          <button
            onClick={() =>
              handleAddItem({
                id: funko.id,
                images: funko.images,
                price: funko.price,
                title: funko.title,
              })
            }
            className="bg-blue-900 py-2 px-12 rounded-lg"
          >
            <I.BsFillCartPlusFill className="text-white text-xl" />
          </button>
        </div>
      ))}
      {showAlert && <Alert message={alertMessage} />}
    </>
  );
};

export default FunkosList;
