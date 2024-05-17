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
      <div className="bg-[#20083B] h-5/6 w-5/6 flex flex-col">
        <Navbar />
        <div className=" grow flex">
          <Sidebar courses={courses} nfts={nfts} />
          <div className="grow bg-[#5723AB] bg-opacity-20 mr-10 mb-12">
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
