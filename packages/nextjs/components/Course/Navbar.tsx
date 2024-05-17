import React from "react";
import Logo from "../global/Logo/Logo";
import Score from "../global/Score/Score";
import { FaucetButton, RainbowKitCustomConnectButton } from "../scaffold-eth";

const Navbar = () => {
  return (
    <div className="flex justify-between p-10">
      <Logo />
      <div className="flex items-center gap-6">
        <span className="mr-10 text-xl font-gilroy">!Hola!, Bienvenidos a tus cursos</span>
        <Score />
        <div>
          <RainbowKitCustomConnectButton />
          <FaucetButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
