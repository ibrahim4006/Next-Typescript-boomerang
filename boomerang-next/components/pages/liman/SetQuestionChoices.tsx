import React from "react";
import ChoiceBoxes from "./ChoiceBoxes";
import AnswerBoxes from "./AnswerBoxes";
import Image from "next/image";

const SetQuestionChoices = () => {
  return (
    <div className="flex justify-between items-center h-auto p-10 border-b">
      <div className=" flex-col justify-start space-y-5">
        <ChoiceBoxes />
        <ChoiceBoxes />
        <ChoiceBoxes />
        <ChoiceBoxes />
        <ChoiceBoxes />
      </div>
      <Image 
      src="/example.svg"
      alt="Example question"
      className="object-cover"
      width={350}
      height={250}
      />
      <div className=" flex-col justify-start space-y-5">
        <AnswerBoxes />
        <AnswerBoxes />
        <AnswerBoxes />
        <AnswerBoxes />
        <AnswerBoxes />
      </div>
    </div>
  );
};

export default SetQuestionChoices;
