import { AnswerBoxesProps } from "@/types";
import React, { useState } from "react";

const AnswerBoxes = ({
  choice,
  containerStyles,
  handleClick,
}: AnswerBoxesProps) => {
  return (
    <button className={containerStyles} onClick={handleClick}>
      <hr className="absolute w-11 border -right-11"></hr>
      <div className="circle-inner">{choice}</div>
    </button>
  );
};

export default AnswerBoxes;
