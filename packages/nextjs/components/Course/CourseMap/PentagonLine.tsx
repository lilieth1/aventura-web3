import React from "react";

const PentagonLine = ({ style }: { style: "L" | "straight" | "none" }) => {
  if (style === "L") {
    return (
      <div className="absolute h-20 w-32 top-28 left-16">
        <div className="absolute bottom-0 left-0 h-px w-full bg-[#FF57F6]"></div>
        <div className="absolute bottom-0 left-0 w-px h-full bg-[#FF57F6]"></div>
      </div>
    );
  }
  if (style === "straight") {
    return (
      <div className="absolute h-20 w-32 top-0 left-16">
        <div className="absolute bottom-0 left-0 h-px w-full bg-[#FF57F6]"></div>
      </div>
    );
  }
  return <></>;
};

export default PentagonLine;
