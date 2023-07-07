"use client";

import { useRouter } from "next/navigation";
import Error from "../../public/undraw_page_not_found_re_e9o6.svg";

export default function NotFound() {
  const { push } = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <img src={Error.src} alt="" className="h-[250px] w-[300px]" />
      <h1 className="text-2xl font-bold">PÁGINA NÃO ENCONTRADA.</h1>
      <button
        className="bg-blue-700 text-white text-sm font-bold rounded-3xl py-2 px-4"
        onClick={() => push("/")}
      >
        RETORNAR A PÁGINA INICIAL
      </button>
    </div>
  );
}
