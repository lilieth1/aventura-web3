import React from "react";
import Image from "next/image";

const Modal = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-[#1a1a1a] rounded-lg p-8 shadow-lg w-96 text-white">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-pink-500">
            <Image src="/assets/close-icon.svg" alt="Close" width={24} height={24} />
          </button>
        </div>
        <div className="text-center">
          <Image src="/assets/award-icon.svg" alt="Award" width={80} height={80} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">¡Felicidades!</h2>
          <p className="text-lg mb-2">Completaste el módulo 1</p>
          <p className="text-pink-500 text-lg mb-4">¡Ganaste 50 puntos!</p>
          <p className="text-lg">¡Muy pronto el módulo 2!</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
