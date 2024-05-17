import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
        <div className="flex relative w-8 h-8  justify-center items-center mr-2">
          <Image alt="AventuraWeb3 Logo" className="cursor-pointer" fill src="/logoLearning.png" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold leading-tight font-orbitron text-2xl">AventuraWeb3</span>
          <span className="font-bold font-orbitron">LATAM</span>
        </div>
      </Link>
    </>
  );
};

export default Logo;
