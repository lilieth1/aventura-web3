import React from "react";
import Image from "next/image";
import Link from "next/link";
import StylishButton from "~~/components/global/StylishButton";

const Home = () => {
  return (
    <div className="mx-20 h-3/5 flex flex-col justify-center items-start gap-12 mt-20">
      <h1 className="font-orbitron text-6xl text-start font-bold">Aprende, juega y gana con web 3</h1>
      <p className="font-gilroy text-xl">
        Sé parte de una emocionante aventura de aprendizaje en el mundo de Web3 y las criptomonedas, ¡todo mientras
        ganas increíbles NFTs!
      </p>
      <Link href="/about">
        <StylishButton text="Conoce más" />
        <Image src={"/assets/courseButton.png"} alt="" width={1000} height={400} />
      </Link>
    </div>
  );
};

export default Home;
