import React, { useEffect, useState } from "react";
import Image from "next/image";
import StylishButton from "../global/StylishButton";

const Quiz = ({ onComplete }: { onComplete: () => void }) => {
  const questions = [
    {
      title: "¿Qué significa DeFi? ",
      options: [
        { label: "Finanzas Centralizadas", value: "a" },
        { label: "Finanzas Descentralizadas", value: "b" },
        { label: "Finanzas Generativas", value: "c" },
      ],
    },
    {
      title: "¿Cuál es el factor clave en las DeFi?",
      options: [
        { label: "Web3", value: "a" },
        { label: "Contratos inteligentes", value: "b" },
        { label: "P2P", value: "c" },
      ],
    },
    {
      title: "¿Qué no encontramos en DeFi?",
      options: [
        { label: "Prestamos", value: "a" },
        { label: "Creditos", value: "b" },
        { label: "Historial Crediticio web2", value: "c" },
      ],
    },
  ];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(""); // Reset selected option on new question
    }
  };

  const previousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setSelectedOption(""); // Reset selected option on previous question
    }
  };

  const [leftImage, setLeftImage] = useState("/assets/course/left-deactivate.svg");
  const [rightImage, setRightImage] = useState("/assets/course/right-activate.svg");

  useEffect(() => {
    setLeftImage(questionIndex > 0 ? "/assets/course/left-activate.svg" : "/assets/course/left-deactivate.svg");
    setRightImage(
      questionIndex < questions.length - 1
        ? "/assets/course/right-activate.svg"
        : "/assets/course/right-deactivate.svg",
    );
  }, [questionIndex, questions.length]);
  return (
    <>
      <div className="relative h-full py-14 px-20 flex flex-col w-full">
        <span className="font-orbitron text-base">Curso: Defi - Quiz</span>
        <h3 className="font-orbitron text-4xl font-bold">{questions[questionIndex].title}</h3>
        <div className="mt-10">
          {questions[questionIndex].options.map((option, idx) => (
            <div
              key={idx}
              className={`flex items-center p-4 mb-4 rounded-lg cursor-pointer transition-colors duration-300
                      ${
                        selectedOption === option.value
                          ? "bg-[#FF57F6] text-white"
                          : "border-solid border-2 border-[#FF57F6] text-white"
                      }`}
              onClick={() => handleOptionChange(option.value)}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 mr-4
                        ${selectedOption === option.value ? "bg-white border-white" : "border-white"}`}
              />
              {option.label}
            </div>
          ))}
        </div>
        <div className="bg-[#5C6DE0] h-20 absolute w-full bottom-0 left-0 flex justify-between items-center">
          <Image
            src={leftImage}
            height={100}
            width={100}
            alt="Previous question"
            className="-mt-20 ml-40 cursor-pointer"
            onClick={previousQuestion}
          />
          {questionIndex === questions.length - 1 && (
            <div className="-mt-20">
              <StylishButton text="Submit Answers" onClick={onComplete} />
            </div>
          )}
          <Image
            src={rightImage}
            height={100}
            width={100}
            alt="Next question"
            className="-mt-20 mr-40 cursor-pointer"
            onClick={nextQuestion}
          />
        </div>
      </div>
    </>
  );
};

export default Quiz;
