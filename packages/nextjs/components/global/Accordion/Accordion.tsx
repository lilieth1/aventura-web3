import React from "react";
import CardAccordion from "./CardAccordion";

interface IAccordion {
  title: string;
  content: string;
}
const Accordion = ({ learningData }: { learningData: IAccordion[] }) => {
  return (
    <div className="mx-14 flex flex-col gap-8">
      {learningData.map((value, index) => {
        return (
          <CardAccordion
            key={index}
            title={value.title}
            content={value.content}
            index={index}
            isLastElement={index + 1 !== learningData.length}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
