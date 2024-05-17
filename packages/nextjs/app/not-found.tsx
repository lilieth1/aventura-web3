import Image from "next/image";
import Link from "next/link";
import StylishButton from "~~/components/global/StylishButton";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <Image src={"/assets/rocket.png"} height={200} width={200} alt="rocket404" className="float" />
        </div>
        <div className="z-20 relative -top-20 w-full h-40 flex flex-col justify-center items-center p-24 bg-black  bg-opacity-40">
          <Link href="/">
            <StylishButton text="Volver" />
          </Link>
          <p className="text-white text-2xl font-orbitron">Sitio en construccion, Proximamente!!!</p>
        </div>
      </div>
    </div>
  );
}
