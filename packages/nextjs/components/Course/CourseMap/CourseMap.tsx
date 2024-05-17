import React from "react";
import Image from "next/image";
import Pentagon from "./Pentagon";

function CourseMap({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="h-full py-14 px-20 flex flex-col">
      <span className="font-orbitron text-base">Curso: Defi</span>
      <h3 className="font-orbitron text-4xl font-bold">Mi progreso</h3>
      <div className="grow ">
        <div className="grid grid-cols-6 gap-4 mt-10 -mb-12">
          <Pentagon style="start"></Pentagon>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="grid col-span-1"></div>
          <div onClick={onComplete}>
            <Pentagon isActive style="node">
              1
            </Pentagon>
          </div>
          <Pentagon style="node">2</Pentagon>
          <Pentagon style="node">3</Pentagon>
          <Pentagon style="last-node">
            <Image src={"/assets/course/pencil.svg"} height={35} width={35} alt="pentagon pencil" />
          </Pentagon>
        </div>

        <div className="grid grid-cols-6 gap-4 -mt-12 ">
          <div className="grid col-span-5"></div>
          <Pentagon style="finish" />
        </div>
      </div>
    </div>
  );
}

export default CourseMap;
