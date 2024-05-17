"use client";

import React, { RefObject, useCallback, useEffect, useRef, useState } from "react";
import Logo from "../global/Logo/Logo";
import Score from "../global/Score/Score";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { HeaderMenuLink } from "~~/types/types";

interface IHeader {
  scrollToComponent: (ref: RefObject<HTMLDivElement>) => void;
  refsNavbar: RefObject<HTMLDivElement>[];
  menuLinks: HeaderMenuLink[];
}

export const HeaderMenuLinks = ({ scrollToComponent, refsNavbar, menuLinks }: IHeader) => {
  console.log(menuLinks);
  return (
    <>
      {menuLinks.map(({ label, key, icon }, index) => {
        return (
          <li
            key={key}
            onClick={() => scrollToComponent(refsNavbar[index])}
            className="bg-transparent hover:shadow-md active:!text-neutral py-1.5 px-3 text-sm gap-2 grid grid-flow-col rounded-none"
          >
            {icon}
            <span className="font-orbitron text-lg">{label}</span>
          </li>
        );
      })}
    </>
  );
};

export const Header = ({ scrollToComponent, refsNavbar, menuLinks }: IHeader) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [bgClass, setBgClass] = useState(true);

  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setBgClass(false);
      } else {
        setBgClass(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all ease-in-out duration-500 flex justify-center w-full sticky top-0 z-50 ${
        bgClass ? "bg-transparent" : "bg-primary shadow-md opacity-95"
      }`}
    >
      <div className="top-0 navbar min-h-0 flex-shrink-0 justify-between z-20 h-22">
        <div className="flex justify-center w-full py-6">
          <div className="lg:hidden dropdown" ref={burgerMenuRef}>
            <label
              tabIndex={0}
              className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
              onClick={() => {
                setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
              }}
            >
              <Bars3Icon className="h-1/2" />
            </label>
            {isDrawerOpen && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              >
                <HeaderMenuLinks scrollToComponent={scrollToComponent} refsNavbar={refsNavbar} menuLinks={menuLinks} />
              </ul>
            )}
          </div>
          <div className="flex">
            <Logo />
            <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal pl-20 gap-14">
              <HeaderMenuLinks scrollToComponent={scrollToComponent} refsNavbar={refsNavbar} menuLinks={menuLinks} />
            </ul>
          </div>
        </div>
        <div className="w-3/5 flex justify-center flex-grow  gap-8 ">
          <Score />
          <div>
            <RainbowKitCustomConnectButton />
            <FaucetButton />
          </div>
        </div>
      </div>
    </div>
  );
};
