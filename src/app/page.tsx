import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-300 w-full h-screen flex flex-col items-center ">
      <div className="flex items-center justify-evenly w-1/2 mt-20">
        <Image
          height={1280}
          width={920}
          className="w-[200px] h-[250px]"
          src="https://matheus-nodebucket.s3.us-east-2.amazonaws.com/funkoshop/godfather.png"
          alt=""
        />
        <div className="flex flex-col w-[360px] gap-4">
          <h2 className="text-2xl font-bold leading-tight">
            Os melhores funkos para sua coleção você encontra aqui na FUNKOSHOP!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            dolorum in illum officiis beatae quibusdam ex eveniet debitis animi,
          </p>
        </div>
      </div>
    </div>
  );
}
