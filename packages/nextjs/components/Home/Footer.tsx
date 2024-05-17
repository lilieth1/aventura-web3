import React from "react";
import Logo from "../global/Logo/Logo";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// import Image from "next/image";
// import Link from "next/link";
// import { hardhat } from "viem/chains";
// import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { HeartIcon } from "@heroicons/react/24/outline";
// import { SwitchTheme } from "~~/components/SwitchTheme";
// import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
// import { Faucet } from "~~/components/scaffold-eth";
// import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
// import { useGlobalState } from "~~/services/store/store";

/**
 * Site footer
 */
export const Footer = () => {
  // const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrencyPrice);
  // const { targetNetwork } = useTargetNetwork();
  // const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <div className="w-full px-32 mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#050308]">
      <div className="flex flex-col justify-between items-baseline h-full">
        <Logo />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between md:w-[75%]">
            <FaInstagram size={30} />
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaYoutube size={30} />
          </div>
          <div>© 2024. All rights reserved</div>
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-around h-full">
        <div>
          <h6 className="font-medium text-white">Cursos</h6>
          <ul>
            <li className="py-2 text-sm">Web3</li>
            <li className="py-2 text-sm">Defi</li>
            <li className="py-2 text-sm">Ethereum</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-white">Niveles</h6>
          <ul>
            <li className="py-2 text-sm">Basico</li>
            <li className="py-2 text-sm">Intermedio</li>
            <li className="py-2 text-sm">Avanzado</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-white">Escribenos! :D</h6>
          <ul>
            <li className="py-2 text-sm"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
