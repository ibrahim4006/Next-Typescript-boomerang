"use client"

import { EntranceCardProps } from "@/types";
import { sayisal } from "@/constants";
import { useState } from "react"

const EntranceCardMiniDeneme = ({
  type,
  description,
  hak,
  pointFactor,
  maxPoint,
  time,
  lesson,
  difficulty,
  subject,
}: EntranceCardProps) => {
  const [showlessoninfo, setLessonInfo] = useState(Array(8).fill(false));

  const handleHoverInfo = (index: number) => {
    const updatedLessonInfo = [...showlessoninfo];
    updatedLessonInfo[index] = true;
    setLessonInfo(updatedLessonInfo);
  };
  const handleLeaveInfo = (index : number) => {
    const updatedLessonInfo = [...showlessoninfo];
    updatedLessonInfo[index] = false;
    setLessonInfo(updatedLessonInfo);
  };
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
          <p>Time : {time}</p>
          <p>Max Puan {maxPoint}</p>
        </div>
      </div>
      <div className="bottom-part">
        {sayisal.map((ders, index) => (
          <div className="bottom-box">
            <div
              className="bottom-box-info"
              onMouseEnter={() => handleHoverInfo(index)}
              onMouseLeave={() => handleLeaveInfo(index)}
            >
              [ {ders}]
              {showlessoninfo[index] && <div className="infocard">
                <p>Soru Sayısı : {10} </p>
                <p>Zorluk : {difficulty} </p>
                <p>Konu : {subject} </p>
              </div>}
            </div>
          </div>
        ))}
        <div className="rules">(Kurallar)</div>
      </div>
    </div>
  );
};

export default EntranceCardMiniDeneme;
