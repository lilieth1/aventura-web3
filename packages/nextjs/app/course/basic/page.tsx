"use client";

import React, { RefObject, useRef } from "react";
import Description from "~~/components/CourseDescription/Description";
import Details from "~~/components/CourseDescription/Details";
import { Footer } from "~~/components/Home/Footer";
import { Header } from "~~/components/Home/Header";
import { menuLinksCourse } from "~~/utils/scaffold-eth/menuLinks";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refsNavbar: RefObject<HTMLDivElement>[] = [useRef(null), useRef(null)];

  const scrollToComponent = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="m-20 bg-primary">
      <Header scrollToComponent={scrollToComponent} refsNavbar={refsNavbar} menuLinks={menuLinksCourse} />
      <div className="z-1" ref={refsNavbar[0]}>
        <Description
          level="Basico"
          title="DeFi: Finanzas descentralizadas "
          description="Las DeFi, son un conjunto de servicios financieros construidos sobre tecnología blockchain que operan sin la necesidad de intermediarios tradicionales, como bancos o instituciones financieras. En lugar de depender de entidades centralizadas, las transacciones en DeFi se llevan a cabo mediante contratos inteligentes,"
          video="Uow1Ne1Wm0I"
        />
      </div>
      <div className="z-1" ref={refsNavbar[1]}>
        <Details />
      </div>

      <Footer />
    </div>
  );
};

export default page;
