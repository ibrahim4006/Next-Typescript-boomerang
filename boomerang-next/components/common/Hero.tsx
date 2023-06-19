"use client";

import { HeroProps } from "@/types";
import SquareButton from "./SquareButton";
import { lessons } from "@/constants";

const Hero = ({
  barTitle,
  pageSubject
}: HeroProps) => {
  const handleSwitch = () => {};

  return (
    <div className="hero">
      <div className="basis-3 w-1/4 flex justify-start space-x-2 items-center mt-4 font-light">
        <hr className="w-[4%] border-t-2 border-black " />
        <p className="border-red-900">YKS / {pageSubject}</p>
      </div>
      {pageSubject && <div className="basis-6 mt-8 flex space-x-8 justify-center items-center font-light">
        {lessons.map((lesson,ind)=>(
          <SquareButton
          key={ind}
          title={lesson}
          containerStyles={`square-btn`}
          handleClick={handleSwitch}
        />
        ))}
      </div>}
      {pageSubject && <div className="basis-3 flex justify-end items-end mr-80 mt-20 text-2xl font-bold">
        {pageSubject}
      </div>}
    </div>
  );
};

export default Hero;
