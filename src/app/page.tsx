import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-300 w-full min-h-screen h-auto flex flex-col items-center gap-32 py-24">
      <div className="flex items-center justify-center w-5/12">
        <div className="flex flex-1 justify-center">
          <Image
            height={1280}
            width={920}
            className="w-[165px] h-[250px]"
            src="https://matheus-nodebucket.s3.us-east-2.amazonaws.com/funkoshop/godfather.png"
            alt=""
          />
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="text-2xl font-bold leading-tight">
            Os melhores funkos para sua coleção você encontra aqui na FUNKOSHOP!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            dolorum in illum officiis beatae quibusdam ex eveniet debitis animi,
          </p>
          20
        </div>
      </div>

      <div className="flex items-center justify-center w-5/12">
        <div className="flex flex-col items-start flex-1 gap-4">
          <h2 className="text-2xl font-bold leading-tight">
            Descubra heróis, vilões, celebridades, criaturas e muito mais!
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ab
            accusantium facilis quas iste est ducimus ea sequi obcaecati aut?
          </p>
          <Link href="/explore">
            <Button
              className="bg-blue-700 py-3 px-4 rounded-lg text-xs font-bold text-white"
              content="DESCUBRA"
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            height={1280}
            width={920}
            className="w-[300px] h-[250px]"
            src="https://matheus-nodebucket.s3.us-east-2.amazonaws.com/funkoshop/img2.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-5/12">
        <div className="flex flex-1 justify-center">
          <Image
            height={1280}
            width={920}
            className="w-[165px] h-[250px]"
            src="https://matheus-nodebucket.s3.us-east-2.amazonaws.com/funkoshop/godfather.png"
            alt=""
          />
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <h2 className="text-2xl font-bold leading-tight">
            Entregamos em todo o Brasil.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ab
            accusantium facilis quas iste est ducimus ea sequi obcaecati aut?
          </p>
        </div>
      </div>
    </main>
  );
}
