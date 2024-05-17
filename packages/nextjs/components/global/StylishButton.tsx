import React from "react";
import "./StylishButton.css";

const StylishButton = ({ text, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center border-white border-2 h-14 w-60 bg-gradient-to-r from-[#FF56F6] from-18% via-[#B936EE] via-53% to-[#3BACE2] to-85% transition duration-300 ease-in-out hover:-translate-y-2 neon-border-style"
    >
      <span className="font-orbitron text-white">{text}</span>
    </button>
  );
};

export default StylishButton;
