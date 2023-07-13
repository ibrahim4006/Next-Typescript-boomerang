import { ChoiceBoxesProps } from "@/types";
import React from "react";

const ChoiceBoxes = ({ points, direction }: ChoiceBoxesProps) => {
  const className = `flex-col w-32 h-10 border ${
    points
      ? direction === "left"
        ? "rounded-l-lg"
        : "rounded-r-lg"
      : direction === "left"
      ? "rounded-l-lg opacity-[0.15]"
      : "rounded-r-lg opacity-[0.15]"
  } flex items-center justify-center`;

  return (
    <div className={className}>
      {points && <p className="basis-1/2 text-sm ">x:{points.x.toFixed(2)}%</p>}
      {points && <p className="basis-1/2 text-sm ">y:{points.y.toFixed(2)}%</p>}
    </div>
  );
};

export default ChoiceBoxes;
