import React from "react";
import Image from "next/image";
import YouTubeVideo from "../global/YoutubeVideo";

interface IDescription {
  level: string;
  title: string;
  description: string;
  video: string;
}
const Description = ({ level, title, description, video }: IDescription) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="w-full flex h-4/5 px-20 py-20 gap-20">
        <div className="w-1/2 flex flex-col justify-center gap-8 pr-10">
          <h2 className="text-2xl font-orbitron uppercase">CURSO NIVEL : {level}</h2>
          <h1 className="text-6xl font-orbitron">{title}</h1>
          <p className="text-lg font-gilroy">{description}</p>
        </div>

        <div className="w-1/2 h-4/5">
          <YouTubeVideo videoId={video} title="Descripción del Video" />
        </div>
      </div>
      <div className="flex justify-start flex-col items-center mb-20 animation-float">
        <Image src="/assets/buttonModule.png" width={700} height={700} alt="button" />
        <Image src="/assets/doritos.png" width={40} height={40} alt="button" className="float" />
        <Image
          src="/assets/home/courses2.png"
          width={150}
          height={150}
          alt="button"
          className="absolute translate-y-40"
        />
      </div>
    </div>
  );
};

export default Description;
