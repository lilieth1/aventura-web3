import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./CardExplore.css";

interface ICardExplore {
  title: string;
  level: string;
  text: string;
  src: string;
  href: string;
}
const CardExplore = ({ title, level, text, src, href }: ICardExplore) => {
  return (
    <Link href={href}>
      <div className="bg-gradient-to-r from-indigo-900 to-[#7000FF] p-5 transition duration-300 ease-in-out transform hover:-translate-y-4 hover:shadow-lg neon-border">
        <h2 className="font-orbitron h-auto text-2xl font-bold">{title}</h2>
        <h3 className="font-orbitron h-auto text-lg">{level}</h3>
        <Image src={src} width={200} height={200} alt="" />
        <p className="font-orbitron h-auto text-lg w-full text-center">{text}</p>
      </div>
    </Link>
  );
};

export default CardExplore;
