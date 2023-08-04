import Image from "next/image";
import ProductDescription from "@/components/explore/id/ProductDescription";
import GoBack from "@/components/explore/id/GoBack";
import { Product } from "@/types/app.types";

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await fetch("http://localhost:3000/funko").then((res) =>
    res.json()
  );

  console.log(products);
  return products.map((product: Product) => ({
    id: String(product.id),
  }));
}

async function getFunko({ params }: { params: { id: string } }) {
  const response = await fetch(`http://localhost:3000/funko/${params.id}`);
  const data: Product = await response.json();

  return data;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getFunko({ params });

  return (
    <div className="flex flex-col relative md:flex-row items-center justify-center md:gap-40 h-full">
      <GoBack />
      <div>
        <Image
          className="h-[200px] w-[150px] md:h-[300px] md:w-[250px]"
          src={data.images[0].url}
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
