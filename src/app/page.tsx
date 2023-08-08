import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-200 w-full h-auto flex flex-col items-center gap-16 md:gap-32 py-10 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-center md:w-5/12 px-10 gap-4">
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
          <h2 className="text-2xl font-bold leading-tight text-center md:text-left">
            Os melhores funkos para sua coleção você encontra aqui na FUNKOSHOP!
          </h2>
          <p>
            Explore uma variedade de personagens que vão desde clássicos
            atemporais até as últimas novidades do mundo do entretenimento. Com
            qualidade e autenticidade garantidas, cada peça é uma oportunidade
            de mergulhar ainda mais fundo no universo pop.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center px-10 md:w-5/12">
        <div className="flex flex-col items-center md:items-start flex-1 gap-4">
          <h2 className="text-center md:text-left text-2xl font-bold leading-tight">
            Descubra heróis, vilões, celebridades, criaturas e muito mais!
          </h2>
          <p>
            Encontre seus personagens favoritos, desde heróis lendários a vilões
            icônicos e figuras famosas, todos capturados em detalhes
            colecionáveis.
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

      <div className="flex items-center justify-center px-10 md:w-5/12">
        <div className="flex flex-col items-center flex-1 gap-4">
          <h2 className="text-2xl font-bold leading-tight text-center">
            Entregamos em todo o Brasil.
          </h2>
          <p className="text-justify">
            Independentemente de onde você esteja, nossa equipe está pronta para
            levar a emoção dos Funkos até a sua porta. Desfrute da conveniência
            de adicionar peças incríveis à sua coleção sem sair de casa. Seja
            qual for o seu canto do país, aguardamos ansiosamente para levar
            essa experiência colecionável até você.
          </p>
          <Image
            height={1280}
            width={920}
            className="aspect-video h-[250px]"
            src="https://matheus-nodebucket.s3.us-east-2.amazonaws.com/funkoshop/deliver-map.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
