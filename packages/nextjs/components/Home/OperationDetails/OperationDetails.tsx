import React from "react";
import OperationDetailsCard from "./OperationDetailsCard";

const OperationDetails = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-40">
      <h1 className="text-6xl font-orbitron">¿Cómo funciona?</h1>
      <div className="flex justify-around gap-5 px-20 h-1/3">
        <OperationDetailsCard
          title="Elige un curso"
          description="Ten la posibilidad de elegir el curso de tu interes desde lo mas basico web3."
          src="/assets/home/works1.png"
        />
        <OperationDetailsCard
          title="Aprende a tu ritmo"
          description="La plataforma esta disponible 24/7 para acceder en cualquier momento"
          src="/assets/home/works2.png"
        />
        <OperationDetailsCard
          title="Termina los quizzes y gana NFT´s"
          description="Accede NFT's exclusivos de nuestra coleccion"
          src="/assets/home/works3.png"
        />
      </div>
    </div>
  );
};

export default OperationDetails;
