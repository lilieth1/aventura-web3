import React from "react";
import Link from "next/link";
import StylishButton from "../global/StylishButton";

const Register = () => {
  return (
    <div className="flex justify-center items-center gap-40 px-40 py-20 bg-gradient-to-b from-transparent to-[#050308]">
      <div className="flex w-1/2 flex-col gap-20">
        <h1 className="text-6xl font-orbitron">Impulsamos la educación gamificada</h1>
        <Link href="/register">
          <StylishButton text="Regístrate" />
        </Link>
      </div>
      <p className="w-1/2 text-2xl font-orbitron">
        Hemos desarrollado los cursos en base a una metodología de gamificación, el cual consiste en aprender de forma
        interactiva de web3 desde cero mientras ganas NFT´s por tu aprendizaje.
      </p>
    </div>
  );
};

export default Register;
