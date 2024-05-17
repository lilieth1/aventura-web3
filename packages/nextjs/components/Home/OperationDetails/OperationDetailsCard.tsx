import React from "react";
import Image from "next/image";

interface IOperationDetailsCard {
  title: string;
  description: string;
  src: string;
}
const OperationDetailsCard = ({ title, description, src }: IOperationDetailsCard) => {
  return (
    <div className="flex flex-col justify-center items-center w-1/4 bg-gradient-to-l from-[#E249F2] to-[#7000FF] py-10 text-white rounded-lg shadow-md relative">
      <div className="absolute flex items-center justify-center -top-16">
        <Image src={src} alt="" width={110} height={110} />
      </div>
      <h2 className="text-4xl font-bold font-orbitron text-center">{title}</h2>
      <p className="text-lg font-gilroy text-center">{description}</p>
    </div>
  );
};

export default OperationDetailsCard;
