"use client";

import React from "react";
import CourseMap from "~~/components/Course/CourseMap/CourseMap";
import Navbar from "~~/components/Course/Navbar";
import Sidebar from "~~/components/Course/Sidebar";
import { Course, NFT } from "~~/types/types";

const courses: Course[] = [
  { id: 1, name: "DeFi Basics" },
  { id: 2, name: "Advanced Smart Contracts" },
];

const nfts: NFT[] = [
  { id: 1, name: "CryptoPunk #1234" },
  { id: 2, name: "Bored Ape #4567" },
];

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      {/* <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <Image src={"/assets/rocket.png"} height={200} width={200} alt="rocket404" className="float" />
        </div>
        <div className="z-20 relative -top-20 w-full h-40 flex flex-col justify-center items-center p-24 bg-black  bg-opacity-40">
          <Link href="/">
            <StylishButton text="Volver" />
          </Link>
          <p className="text-white text-2xl font-orbitron">Siguiente a construir, Proximamente!!!</p>
        </div>
      </div> */}
      <div className="bg-[#20083B] h-4/5 w-5/6 flex flex-col">
        <Navbar />
        <div className=" grow flex">
          <Sidebar courses={courses} nfts={nfts} />
          <div className="grow bg-[#5723AB] bg-opacity-20 mr-10 mb-10">
            {/* progress component */}
            <CourseMap />
            {/* course component */}
            {/* <CourseSlide /> */}
            {/* quiz component */}
            {/* <Quiz /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
