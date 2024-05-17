"use client";

import React, { useState } from "react";
import CourseMap from "~~/components/Course/CourseMap/CourseMap";
import CourseSlide from "~~/components/Course/CourseSlide";
import Navbar from "~~/components/Course/Navbar";
import Quiz from "~~/components/Course/Quiz";
import Sidebar from "~~/components/Course/Sidebar";
import Modal from "~~/components/global/Modal";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { Course, NFT } from "~~/types/types";

const courses: Course[] = [{ id: 1, name: "DeFi Basics" }];

const nfts: NFT[] = [
  { id: 1, name: "CryptoPunk #1234" },
  { id: 2, name: "Bored Ape #4567" },
];

const Page = () => {
  const [currentView, setCurrentView] = useState("CourseMap");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { targetNetwork } = useTargetNetwork();
  let contractName: any = "CriptoAventura";
  if (targetNetwork.name !== "sepolia") {
    contractName = "CriptoAventuraENS";
  }
  const { writeContractAsync: mintNFTAsync } = useScaffoldWriteContract(contractName);

  const handleCourseMapComplete = () => {
    setCurrentView("CourseSlide");
  };

  const handleCourseSlideComplete = () => {
    setCurrentView("Quiz");
  };

  const handleQuizComplete = async () => {
    const nameResp = await fetch("https://random-data-api.com/api/name/random_name");
    const data = await nameResp.json();
    const name = data.name;
    const dateEnd = Math.floor(new Date("2024-05-17").getTime() / 1000);
    try {
      await mintNFTAsync({
        functionName: "mint",
        args: [name, dateEnd, "1"],
      } as never);
    } catch (e) {
      console.error("Error minting NFT:", e);
    }
  };

  // setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentView("CourseMap");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-[#20083B] h-5/6 w-5/6 flex flex-col">
        <Navbar />
        <div className="grow flex">
          <Sidebar courses={courses} nfts={nfts} />
          <div className="grow bg-[#5723AB] bg-opacity-20 mr-10 mb-12 w-4/5">
            {currentView === "CourseMap" && <CourseMap onComplete={handleCourseMapComplete} />}
            {currentView === "CourseSlide" && <CourseSlide onComplete={handleCourseSlideComplete} />}
            {currentView === "Quiz" && <Quiz onComplete={handleQuizComplete} />}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <p>El flujo se respetó correctamente.</p>
          <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Cerrar
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Page;
