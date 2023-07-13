import React, { useState } from "react";
import ChoiceBoxes from "./ChoiceBoxes";
import AnswerBoxes from "./AnswerBoxes";
import Image from "next/image";
import RectangleDrawer from "./RectangleDrawer";
import { choices } from "@/constants";
import { SetQuestionChoicesProps } from "@/types";

interface Point {
  x: number;
  y: number;
}

const SetQuestionChoices = ({ preview }: SetQuestionChoicesProps) => {
  const [points, setPoints] = useState<Point[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const oddNumbers = Array.from({ length: 5 }, (_, index) => index * 2 + 1);
  const evenNumbers = Array.from({ length: 5 }, (_, index) => index * 2);

  const changeCorrectAnswer = (answer: string) => {
    setCorrectAnswer(answer);
  };
  return (
    <div className="flex justify-between items-center h-auto p-10 border-b">
        <div className=" flex-col justify-start space-y-5">
          {choices.map((choice, index) => (
            <div className="circle-outer">
              <div className="circle-inner">{choice}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className=" flex-col justify-start space-y-5">
            {evenNumbers.map((even, index) => (
              <ChoiceBoxes key={index} points={points[even]} direction="left" />
            ))}
          </div>
          <div className=" flex-col justify-start space-y-5">
            {oddNumbers.map((odd, index) => (
              <ChoiceBoxes key={index} points={points[odd]} direction="right" />
            ))}
          </div>
        </div>
      <RectangleDrawer
        points={points}
        setPoints={setPoints}
        preview={preview}
      />
      <div className=" flex-col justify-start space-y-5">
        {choices.map((choice, index) => (
          <AnswerBoxes
            choice={choice}
            containerStyles={
              correctAnswer === choice
                ? "circle-outer relative cursor-pointer active"
                : "circle-outer relative cursor-pointer"
            }
            handleClick={() => changeCorrectAnswer(choice)}
          />
        ))}
      </div>
    </div>
  );
};

export default SetQuestionChoices;
