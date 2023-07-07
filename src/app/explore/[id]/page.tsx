import Image from "next/image";
import ProductDescription from "@/components/explore/id/ProductDescription";
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

async function getFunko({ params }: { params: { id: string } }) {
  const response = await fetch(`http://localhost:3333/funkos/${params.id}`);
  const data: IFunkos = await response.json();

  return data;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getFunko({ params });
  console.log(data);

  return (
    <div className="flex items-center justify-center gap-40 h-full">
      <div>
        <Image
          className="h-[300px] w-[250px]"
          src={data.images.icon1}
          alt={data.title}
          width={920}
          height={480}
        />
      </div>
      <ProductDescription
        price={data.price}
        title={data.title}
        id={data.id}
        images={data.images}
      />
    </div>
  );
};

export default Page;
