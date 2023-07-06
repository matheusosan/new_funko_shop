import Image from "next/image";
import { IFunkos } from "@/types/app.types";

export const dynamicParams = false;

export async function generateStaticParams() {
  const funkos = await fetch("http://localhost:3333/funkos").then((res) =>
    res.json()
  );

  return funkos.map((funko: IFunkos) => ({
    id: funko.id.toString(),
  }));
}

export async function getFunko({ params }: { params: { id: string } }) {
  const response = await fetch(`http://localhost:3333/funkos/${params.id}`);
  const data: IFunkos = await response.json();

  return data;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getFunko({ params });
  console.log(data);

  return (
    <div className="flex items-center justify-center gap-40 h-[80vh]">
      <div>
        <div></div>
        <Image
          className="h-[300px] w-[250px]"
          src={data.images.icon1}
          alt={data.title}
          width={920}
          height={480}
        />
      </div>

      <div className="flex flex-col justify-between w-[380px] gap-5 p-4 border-zinc-200 border-2 rounded-md">
        <h2 className="text-3xl font-bold">{data.title}</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          exercitationem itaque iure rerum dolor eligendi sit dolorem ipsam,
          quos necessitatibus.
        </p>
        <p>R${data.price}</p>
        <button className="bg-blue-700 text-white font-bold text-xl p-4 rounded-md cursor-pointer">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default Page;
