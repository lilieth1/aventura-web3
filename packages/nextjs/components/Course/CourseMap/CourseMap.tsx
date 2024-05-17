import React from "react";
import Pentagon from "./Pentagon";

function CourseMap() {
  return (
    <div className="h-full p-14 flex flex-col">
      <span className="font-orbitron text-base">Curso: Defi</span>
      <h3 className="font-orbitron text-4xl font-bold">Mi progreso</h3>
      <div className="grow bg-error">
        <div className="grid grid-cols-4 gap-4">
          <Pentagon />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Pentagon />
          <Pentagon />
          <Pentagon />
          <Pentagon />
        </div>

        <div className="grid grid-cols-4 gap-4 col-span-2 bg-success">
          <Pentagon />
        </div>
      </div>
    </div>
  );
}

export default CourseMap;
