"use client";

import { RefObject, useRef } from "react";
import type { NextPage } from "next";
import { Footer } from "~~/components/Home/Footer";
import { Header } from "~~/components/Home/Header";
import HeroHome from "~~/components/Home/HeroHome/HeroHome";
import OperationDetails from "~~/components/Home/OperationDetails/OperationDetails";
import Register from "~~/components/Home/Register";
import { menuLinksMain } from "~~/utils/scaffold-eth/menuLinks";

// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  const refsNavbar: RefObject<HTMLDivElement>[] = [useRef(null), useRef(null), useRef(null)];

  const scrollToComponent = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="m-20 bg-primary">
      <Header scrollToComponent={scrollToComponent} refsNavbar={refsNavbar} menuLinks={menuLinksMain} />
      <div className="z-1" ref={refsNavbar[0]}>
        <HeroHome />
      </div>
      <div className="z-1" ref={refsNavbar[1]}>
        <OperationDetails />
      </div>
      <div className="z-1" ref={refsNavbar[2]}>
        <Register />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
