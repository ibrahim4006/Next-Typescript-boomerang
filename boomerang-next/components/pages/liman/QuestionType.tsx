"use client";
import { SquareButton } from "@/components/common";
import Image from "next/image";
import React from "react";
import { lessons } from "@/constants";
import { QuestionTypeProps } from "@/types";

const QuestionType = ({ setisAddQuestionPageShow }: QuestionTypeProps) => {
  return (
    <div className="w-2/3 ml-auto mr-auto border mt-[5%] mb-[5%] flex-col justify-start">
      <div className="w-full h-24 border-b pl-10 font-bold text-2xl flex items-center uppercase">
        Yeni Soru
      </div>
      <div className="w-full h-20 border-b flex items-center pl-10 space-x-5">
        <SquareButton title="9.Sınıf" containerStyles="square-btn-s" />
        <SquareButton title="10.Sınıf" containerStyles="square-btn-s" />
        <SquareButton title="11.Sınıf" containerStyles="square-btn-s" />
        <SquareButton title="12.Sınıf" containerStyles="square-btn-s" />
      </div>
      <div className="w-full h-20 border-b flex items-center pl-10 space-x-5">
        {lessons.map(
          (lesson, ind) =>
            lesson !== "Felsefe" &&
            lesson !== "Din" && (
              <SquareButton
                key={ind}
                title={lesson}
                containerStyles="square-btn-s"
              />
            )
        )}
      </div>
      <div className="w-full h-20 border-b flex items-center pl-10 space-x-5">
        {lessons.map(
          (lesson, ind) =>
            lesson !== "Felsefe" &&
            lesson !== "Din" && (
              <SquareButton
                key={ind}
                title={lesson}
                containerStyles="square-btn-s"
              />
            )
        )}
      </div>
      <div className="w-full h-20 border-b flex items-center pl-10 space-x-5">
        {lessons.map(
          (lesson, ind) =>
            lesson !== "Felsefe" &&
            lesson !== "Din" && (
              <SquareButton
                key={ind}
                title={lesson}
                containerStyles="square-btn-s"
              />
            )
        )}
      </div>
      <div className="w-full h-20 border-b flex items-center pl-10 space-x-5">
        <SquareButton title="9.Sınıf" containerStyles="square-btn-s" />
        <SquareButton title="10.Sınıf" containerStyles="square-btn-s" />
        <SquareButton title="11.Sınıf" containerStyles="square-btn-s" />
        <SquareButton title="12.Sınıf" containerStyles="square-btn-s" />
      </div>
      <div className="w-full h-24 flex justify-end items-center pr-5">
        <Image
          src="/denemeboomerang.svg"
          alt="Boomerang Ok"
          className="-rotate-90 cursor-pointer ml-5"
          width={45}
          height={45}
          onClick={() => setisAddQuestionPageShow(true)}
        />
      </div>
    </div>
  );
};

export default QuestionType;
