import React from "react";
import Image from "next/image";
import Logo from "./Logo/Logo";

const Modal = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-32">
      <div className="relative bg-[#1a1a1a] rounded-lg p-8 shadow-lg w-1/3 h-4/5 font-white">
        <div className="flex justify-between">
          <Logo />
          <div className="flex justify-end" onClick={onClose}>
            <Image src="/assets/course/cruz-close.svg" alt="Award" width={25} height={25} className="text-bold" />
          </div>
        </div>
        <div className="text-center mt-4">
          <Image src="/assets/course/token.svg" alt="Award" width={200} height={200} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold font-orbitron mb-2">¡Felicidades!</h2>
          <p className="text-3xl font-bold font-orbitron mb-2">Completaste el módulo 1</p>
          <p className="text-[#FF57F6] font-orbitron text-lg mb-4">¡Ganaste 50 puntos!</p>
          <p className="text-lg font-orbitron">¡Muy pronto el módulo 2!</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
