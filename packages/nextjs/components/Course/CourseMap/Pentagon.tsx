import React from "react";
import Image from "next/image";

const Pentagon = ({ contain, color }: any) => {
  console.log(color);
  console.log(contain);

  return (
    <div className="relative bg-warning flex items-center justify-center">
      <Image src={"/assets/course/pentagon-primary.svg"} height={120} width={120} alt="rocket" className=" mt-6" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-white">4</span>
      </div>
    </div>
  );
};

export default Pentagon;
