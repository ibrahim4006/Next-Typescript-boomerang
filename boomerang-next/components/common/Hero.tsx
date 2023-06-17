"use client";

import SquareButton from "./SquareButton";
import { lessons } from "@/constants";

const Hero = () => {
  const handleSwitch = () => {};

  return (
    <div className="hero">
      <div className="basis-31/4 w-1/6 flex justify-start space-x-2 items-center mt-4 font-light">
        <hr className="basis-4 border-t-2 border-black " />
        <p className="basis-8 border-red-900">YKS</p>
      </div>
      <div className="basis-6 mt-8 flex space-x-8 justify-center items-center font-light">
        {lessons.map((lesson,ind)=>(
          <SquareButton
          key={ind}
          title={lesson}
          containerStyles={`square-btn`}
          handleClick={handleSwitch}
        />
        ))}
      </div>
      <div className="basis-3 flex justify-end items-end mr-80 mt-20 text-2xl font-bold">
        COME ON
      </div>
    </div>
  );
};

export default Hero;
