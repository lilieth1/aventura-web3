import React, { useState } from "react";
import Image from "next/image";

interface ICardAccordion {
  title: string;
  content: string;
  index: number;
  isLastElement: boolean;
}
const CardAccordion = ({ title, content, index, isLastElement }: ICardAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4 relative ml-10">
      <div
        className="bg-[url('/assets/bg-card.png')] bg-no-repeat ml-10 flex items-center "
        style={{
          backgroundSize: "1100%",
          backgroundPosition: "center",
        }}
      >
        {isLastElement && (
          <div className={`absolute top-10 -left-2 ${isOpen ? "h-[26rem]" : "h-60"} w-px bg-[#FF57F6] `}></div>
        )}

        <Image
          className="absolute top-8 -left-8 "
          src={"/assets/ball-icon.png"}
          width={50}
          height={50}
          alt="open-icon"
        />
        <div className="mx-10 my-12 w-full">
          <h3 className="font-orbitron text-2xl">Modulo {index}</h3>
          <h2 className="font-orbitron text-3xl font-semibold text-white">{title}</h2>
          {isOpen && <div className="mt-10 font-gilroy text-lg">{content}</div>}
        </div>

        <div className="absolute right-10 top-10 cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <Image src={"/assets/open-icon.png"} width={50} height={50} alt="open-icon" />
          ) : (
            <Image src={"/assets/close-icon.png"} width={50} height={50} alt="close-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardAccordion;
