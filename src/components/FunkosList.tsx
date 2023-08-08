import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/app.types";
import AddToCartButton from "./AddToCartButton";

const fetchFunkos = async () => {
  const response = await fetch(`${process.env.DB_URL}/funko`);
  return response.json();
};

const FunkosList = async () => {
  const data: Product[] = await fetchFunkos();

  return (
    <>
      {data.map((funko) => (
        <div
          className="flex flex-col items-center justify-between shadow-2xl rounded-2xl py-6 h-[400px]"
          key={funko.id}
        >
          <Link href={`/explore/${funko.id}`}>
            <Image
              width={920}
              height={1280}
              className="w-[120px] h-[200px] cursor-pointer"
              src={funko.images[0].url}
              alt={funko.title}
            />
          </Link>
          <h2 className="font-bold text-center px-4">{funko.title}</h2>
          <p>R${funko.price}</p>
          <AddToCartButton itemToAdd={funko} />
        </div>
      ))}
    </>
  );
};

export default FunkosList;
