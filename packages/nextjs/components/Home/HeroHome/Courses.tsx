import React from "react";
import CardExplore from "~~/components/global/CardExplore";

const Courses = () => {
  return (
    <div className="mx-20 flex flex-col justify-center items-start gap-12">
      <h2 className="font-orbitron h-auto text-xl">Explora los cursos</h2>
      <div className="flex items-center justify-center gap-20 w-full">
        <CardExplore
          title="Web 3"
          level="BASICO"
          src="/assets/home/courses1.png"
          text="Ir al curso"
          href="/course/basic/"
        />
        <CardExplore
          title="Defi"
          level="INTERMEDIO"
          src="/assets/home/courses2.png"
          text="Proximamente"
          href="/course/intermediate/"
        />
        <CardExplore
          title="Refi"
          level="AVANZADO"
          src="/assets/home/courses3.png"
          text="Proximamente"
          href="/course/advance/"
        />
      </div>
    </div>
  );
};

export default Courses;
