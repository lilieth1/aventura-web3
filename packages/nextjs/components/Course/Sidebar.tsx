import React, { useState } from "react";
import { Course, NFT } from "~~/types/types";

interface SidebarProps {
  courses: Course[];
  nfts: NFT[];
}

const Sidebar = ({ courses, nfts }: SidebarProps) => {
  const [isCoursesOpen, setIsCoursesOpen] = useState<boolean>(true);
  const [isNFTsOpen, setIsNFTsOpen] = useState<boolean>(false);

  return (
    <div className=" w-1/5 text-white m-12">
      <div className="mb-8">
        <h1
          className="text-xl font-bold flex justify-between items-center cursor-pointer"
          onClick={() => setIsCoursesOpen(!isCoursesOpen)}
        >
          <span className={`text-lg font-orbitron ${!isCoursesOpen ? "text-white" : "text-[#FF57F6]"} `}>
            Mis cursos
          </span>
        </h1>
        {isCoursesOpen && (
          <div className="flex flex-col gap-2 pl-4 mt-2">
            {courses.map(course => (
              <ul key={course.id} className="text-white hover:text-[#FF57F6] flex items-center">
                <li className=" text-[#FF57F6] rounded text-2xl mr-2">▶</li>
                <li className="font-gilroy text-base pt-1">{course.name}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
      <div>
        <h1
          className="text-xl font-bold flex justify-between items-center cursor-pointer"
          onClick={() => setIsNFTsOpen(!isNFTsOpen)}
        >
          <span className={`text-lg font-orbitron ${!isNFTsOpen ? "text-white" : "text-[#FF57F6]"} `}>Mis NFTs</span>
        </h1>
        {isNFTsOpen && (
          <div className="flex flex-col gap-2 pl-4 mt-2">
            {nfts.map(nft => (
              <ul key={nft.id} className="text-white hover:text-[#FF57F6] flex items-center">
                <li className=" text-[#FF57F6] rounded text-2xl mr-2">▶</li>
                <li className="font-gilroy text-base pt-1">{nft.name}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
