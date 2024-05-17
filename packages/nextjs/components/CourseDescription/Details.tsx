import React from "react";
import Image from "next/image";
import Link from "next/link";
import Accordion from "../global/Accordion/Accordion";
import StylishButton from "../global/StylishButton";

const Details = () => {
  const learningData = [
    {
      title: "Introducción a DeFi",
      content:
        "Adéntrate en DeFi, la revolución de las finanzas digitales, y domina cómo los contratos inteligentes están transformando operaciones como los préstamos y la generación de intereses. Descubre cómo este módulo es tu puerta de entrada a una economía financiera más abierta y conectada.",
    },
    {
      title: "¿Cómo funciona DeFi?",
      content:
        "Desentraña los mecanismos que impulsan las Finanzas Descentralizadas. En este módulo, desglosaremos la arquitectura subyacente de DeFi y cómo su enfoque descentralizado no solo mejora la seguridad y transparencia de las transacciones financieras sino que también ofrece control y acceso directo a los usuarios. Prepárate para entender las piezas que componen el motor de DeFi.",
    },
    {
      title: "Contratos inteligentes",
      content:
        "Sumérgete en el corazón tecnológico de DeFi: los contratos inteligentes. Este módulo se centra en cómo estos protocolos autoejecutables forman la base de las transacciones y servicios en DeFi, proporcionando un sistema confiable y automatizado para la realización de acuerdos digitales. Aprenderás su lógica, despliegue y las mejores prácticas para su integración segura.",
    },
    {
      title: "Stable coins",
      content:
        "Explora el mundo de las stablecoins, una pieza crucial en el ecosistema DeFi que aporta estabilidad al volátil mercado de criptomonedas. En este módulo, aprenderás cómo las stablecoins mantienen su valor anclado a activos tradicionales, sus diversos usos en transacciones y como garantía en préstamos, y los desafíos regulatorios que enfrentan.",
    },
    {
      title: "¿Qué son DEX y AMM?",
      content:
        "Adéntrate en el innovador mundo de los Exchanges Descentralizados (DEX) y los Proveedores Automáticos de Liquidez (AMM). Este módulo explora cómo estas plataformas permiten el intercambio de criptoactivos sin intermediarios, ofreciendo a los usuarios control total sobre sus transacciones. Aprenderás sobre el funcionamiento interno de los AMM, su importancia en la creación de liquidez, y las estrategias para optimizar tus interacciones con estos sistemas.",
    },
  ];
  return (
    <div className="flex bg-gradient-to-b from-primary to-[#000000] mt-32">
      <div className="w-full">
        <h2 className="m-32 my-10 font-orbitron text-7xl font-bold mb-20">¿Qué aprenderás?</h2>
        <Accordion learningData={learningData} />
      </div>
      <div className="my-10 mx-28 w-1/3 h-full sticky top-40 z-10 bg-black flex flex-col items-center justify-center border-2 border-[#E249F2]">
        <Image src={"/assets/rocket.png"} height={200} width={200} alt="rocket" />
        <div className="flex flex-col items-center gap-8 px-8 py-6 bg-black bg-opacity-60 absolute bottom-0">
          <div className="flex flex-col gap-2">
            <span className="font-orbitron text-xl font-bold text-white">Inicia el curso y gana un NFT</span>
            <span className="font-gilroy text-sm">
              Para conseguir este NFT deberás completar todos los módulos del curso y sus misiones.
            </span>
          </div>
          <Link href="/course/basic/defi">
            <StylishButton text={"Empezar curso"}>sdfs</StylishButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
