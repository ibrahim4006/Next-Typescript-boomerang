import { EntranceCardProps } from "@/types";
import React from "react";

const EntranceCardCompetition = ({
    type,
    description,
    hak,
    pointFactor,
    maxPoint,
    time,
    lesson,
    difficulty,
    subject
  }: EntranceCardProps) => {
  return (
    <div className="entrancecard">
      <div className="background"></div>
      <div className="frame">
        <div className="frame-top"></div>
        <div className="frame-bottom"></div>
      </div>
      <div className="top-part">
        <div className="top-box">
          <p>Tür : {type} </p>
          <p>Tanım : {description}</p>
          <p>Hak : {hak}</p>
        </div>
      </div>
      <div className="bottom-part">
        <div className="bottom-box">
          <div className="bottom-box-info">
            [ {lesson}]
            <div className="infocard">
              <p>Soru Sayısı : {10} </p>
              <p>Zorluk : {difficulty} </p>
              <p>Konu : {subject} </p>
            </div>
          </div>
        </div>
        <div className="rules">(Kurallar)</div>
      </div>
    </div>
    // <div className="entrancecard hover:scale-105 hover:bg-[#0d0d0d]">
    //   <div className="absolute top-0 left-0 right--7 bottom-0  bg-[#f7f6f1] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#0d0d0d]"></div>
    //   <div>
    //     <div className="before:scale-120 before:m-1.5 before:content-none before:absolute before:top-0 before:right-0 before:bottom-[96%] before:w-1 before:border-r  after:scale-120 after:m-1.5 after:content-none after:absolute after:top-0 after:right-0 after:left-[92%] after:h-1 after:border-t absolute top--10 left-0 bottom-0 right--8 bg-transparent transition transform ease-in-out duration-300 "></div>
    //     <div className="before:scale-120 before:m-1.5 before:content-none before:absolute before:top-[92%] before:left-0 before:bottom-0 before:w-1 before:h-1.5 before:border-l after:scale-120 after:m-1.5 after:content-none after:absolute after:bottom-0 after:right-[99%] after:left-0 after:w-2 after:border-t  absolute top-0 left-8 bottom--10 right-0 bg-transparent transition transform ease-in-out duration-300"></div>
    //   </div>
    //   <div className="border-t-2 basis-3">
    //     <div className="border-b w-[96%] h-[96%] m-auto mb-1 text-start pt-4 flex-col justify-start space-x-2 ">
    //       <p>Türü</p>
    //       <p>Tanım</p>
    //       <p>Hak</p>
    //     </div>
    //   </div>
    //   <div className="bottom-part">
    //     <div className="bottom-box"></div>
    //   </div>
    //   <div className="rules">(Kurallar)</div>
    // </div>
  );
};

export default EntranceCardCompetition;
