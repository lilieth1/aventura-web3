import React from "react";
import Image from "next/image";
import PentagonLine from "./PentagonLine";

interface IPentagon {
  children?: React.ReactNode;
  isActive?: boolean;
  style: "start" | "node" | "finish" | "last-node";
}
const Pentagon = ({ children, isActive, style }: IPentagon) => {
  if (style === "start") {
    return (
      <div className="relative flex items-center justify-center">
        <div className="z-10">
          <Image src={"/assets/course/pentagon-start.svg"} height={130} width={130} alt="rocket" className=" mt-6" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-white">{children}</span>
          </div>
        </div>
        <PentagonLine style="L" />
      </div>
    );
  }
  if (style === "finish") {
    return (
      <div className="relative flex items-center justify-center">
        <div className="z-10">
          <Image src={"/assets/course/pentagon-finish.svg"} height={130} width={130} alt="rocket" className=" mt-6" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-white">{children}</span>
          </div>
        </div>
        <PentagonLine style="none" />
      </div>
    );
  }
  if (style === "last-node") {
    return (
      <div className="relative flex items-center justify-center">
        <div className="z-10">
          {isActive ? (
            <Image
              src={"/assets/course/pentagon-primary.svg"}
              height={130}
              width={130}
              alt="rocket"
              className=" mt-6"
            />
          ) : (
            <Image src={"/assets/course/pentagon-gray.svg"} height={130} width={130} alt="rocket" className="mt-6" />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-white mb-2">{children}</span>
          </div>
        </div>
        <PentagonLine style="L" />
      </div>
    );
  }
  return (
    <div className="relative flex items-center justify-center">
      <div className="z-10">
        {isActive ? (
          <button className="cursor-not-allowed">
            <Image src={"/assets/course/pentagon-primary.svg"} height={130} width={130} alt="rocket" className="mt-6" />
          </button>
        ) : (
          <Image src={"/assets/course/pentagon-gray.svg"} height={130} width={130} alt="rocket" className=" mt-6" />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white mb-2">{children}</span>
        </div>
      </div>
      <PentagonLine style="straight" />
    </div>
  );
};

export default Pentagon;
