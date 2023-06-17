import { EntranceCardProps } from '@/types'
import React from 'react'

const EntranceCardGames = ({
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
          <p>Hak: {hak}</p>
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
  )
}

export default EntranceCardGames
