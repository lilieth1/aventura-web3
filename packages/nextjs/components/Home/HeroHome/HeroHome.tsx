import React from "react";
import Image from "next/image";
import Courses from "./Courses";
import "./HeroHome.css";
import Home from "./Home";

const HeroHome = () => {
  return (
    <div className="flex">
      <div className="w-2/3 h-auto border-r-2 border-[#FF56F6] -mt-[8.5rem]">
        <Home />
        <Courses />
      </div>
      <div className="glow-wrapper w-1/3  border-b-2 border-[#FF56F6]">
        <div className="flex justify-center">
          <Image src={"/assets/rocket.png"} height={550} width={550} alt="rocket" className="glow-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
