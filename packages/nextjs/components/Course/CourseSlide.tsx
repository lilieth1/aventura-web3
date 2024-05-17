import React, { useEffect, useState } from "react";
import Image from "next/image";
import FormattedText from "../global/FormattedText";
import StylishButton from "../global/StylishButton";

const CourseSlide = ({ onComplete }: { onComplete: () => void }) => {
  const title = ["¿Qué es DeFi?", "¿Por qué hablamos de la descentralización en DeFi?", "¡Momento del Quizz!"];
  const descriptions = [
    "[para]DeFi nos permite acceder a muchos de servicios sin tener que pasar por los bancos tradicionales ni entidades centralizadas.[/para][title]¿Qué son servicios financieros?[/title][para]Son activos como préstamos, tarjetas, ingresos pasivos, cuentas mancomunadas que ofrecen los bancos o entidades centralizadas en el mundo web2.[/para][title]¿Por qué son centralizados?[/title][para]Porque una entidad los controla y se reporta directamente a ellos, sólo ellos pueden otorgar los servicios financieros.[/para]",
    "[para]Porque en web3 no existen las entidades centralizadas, sino que cada persona es dueño de sus propios activos, por tanto se pueden realizar diversas transacciones en la blockchain sin depender de alguna entidad centralizadora.[/para][title]Lo que podemos encontrar en DeFi:[/title][list][item]Préstamos[/item][item]Créditos[/item][item]Activos sintéticos[/item][item]y más...[/item][/list][para]Casi todos los productos financieros de web2.[/para]",
    "[para]Felicidades por terminar el primer módulo, ahora vamos a pasar el quizz. Tendrás solo 5 minutos para resolverlo, así que mucha suerte. Por favor haz click en el botón “Empezar quizz”.[/para]",
  ];
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [leftImage, setLeftImage] = useState("/assets/course/left-deactivate.svg");
  const [rightImage, setRightImage] = useState("/assets/course/right-activate.svg");

  useEffect(() => {
    setLeftImage(descriptionIndex > 0 ? "/assets/course/left-activate.svg" : "/assets/course/left-deactivate.svg");
    setRightImage(
      descriptionIndex < descriptions.length - 1
        ? "/assets/course/right-activate.svg"
        : "/assets/course/right-deactivate.svg",
    );
  }, [descriptionIndex, descriptions.length]);

  const handleRightClick = () => {
    if (descriptionIndex < descriptions.length - 1) {
      setDescriptionIndex(descriptionIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (descriptionIndex > 0) {
      setDescriptionIndex(descriptionIndex - 1);
    }
  };

  return (
    <>
      <div className="relative h-full py-14 px-20 flex flex-col w-full">
        <span className="font-orbitron text-base">Curso: Defi</span>
        <h3 className="font-orbitron text-4xl font-bold">{title[descriptionIndex]}</h3>
        <div className="grow font-gilroy flex items-start mt-8">
          <FormattedText text={descriptions[descriptionIndex]} />
        </div>
        <div className="bg-[#5C6DE0] h-20 absolute w-full bottom-0 left-0 flex justify-between items-center">
          <Image
            src={leftImage}
            height={100}
            width={100}
            alt="Previous slide"
            className="-mt-20 ml-40 cursor-pointer"
            onClick={handleLeftClick}
          />
          {descriptionIndex === descriptions.length - 1 && (
            <div className="-mt-20">
              <StylishButton text="Start Quiz" onClick={onComplete} />
            </div>
          )}
          <Image
            src={rightImage}
            height={100}
            width={100}
            alt="Next slide"
            className="-mt-20 mr-40 cursor-pointer"
            onClick={handleRightClick}
          />
        </div>
      </div>
    </>
  );
};

export default CourseSlide;
