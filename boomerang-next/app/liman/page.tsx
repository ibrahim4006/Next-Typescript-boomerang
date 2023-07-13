"use client";
import { Hero, SquareButton } from "@/components/common";
import React, { useState } from "react";
import { difficulty, lessons } from "@/constants";
import Image from "next/image";
import QuestionType from "@/components/pages/liman/QuestionType";
import AddQuestion from "@/components/pages/liman/AddQuestion";
import PreviewPage from "@/components/pages/liman/PreviewPage";

const page = () => {
  const [isAddQuestionPageShow, setisAddQuestionPageShow] =
    useState<boolean>(false);
  const [ispreviewPageShow, setisPreviewPageShow] = useState<boolean>(false);
  const [ischoicePageOpen, setischoicePageOpen] = useState<boolean>(true);
  const [activeLesson, setActiveLesson] = useState<string>("matematik");
  const [activeClass, setActiveClass] = useState<string>("9");
  const [activeSubjects, setActiveSubjects] = useState<string>("Mantık");
  const [activeChapter, setActiveChapter] = useState<string>("Sayılar ve Cebir");
  const [activedifficulty, setDifficulty] = useState<string>("Kolay");
  const [preview, setPreview] = useState<File | null>(null);
  return (
    <main>
      <Hero barTitle="Liman" pageSubject="Liman" />
      {isAddQuestionPageShow ? (
        <AddQuestion
          ischoicePageOpen={ischoicePageOpen}
          setischoicePageOpen={setischoicePageOpen}
          isAddQuestionPageShow={isAddQuestionPageShow}
          setisAddQuestionPageShow={setisAddQuestionPageShow}
          setisPreviewPageShow={setisPreviewPageShow}
          preview={preview}
          setPreview={setPreview}
        />
      ) : ispreviewPageShow ? (
        <PreviewPage
          setischoicePageOpen={setischoicePageOpen}
          isAddQuestionPageShow={isAddQuestionPageShow}
          setisAddQuestionPageShow={setisAddQuestionPageShow}
          setisPreviewPageShow={setisPreviewPageShow}
          classes={activeClass}
          subject={activeSubjects}
          lesson={activeLesson}
          chapter={activeChapter}
          difficulty={activedifficulty}
          preview={preview}
        />
      ) : (
        <QuestionType
          setisAddQuestionPageShow={setisAddQuestionPageShow}
          activeClass={activeClass}
          activeChapter={activeChapter}
          activeLesson={activeLesson}
          activeSubjects={activeSubjects}
          activedifficulty={activedifficulty}
          setActiveChapter={setActiveChapter}
          setActiveClass={setActiveClass}
          setActiveLesson={setActiveLesson}
          setActiveSubjects={setActiveSubjects}
          setDifficulty={setDifficulty}
        />
      )}
    </main>
  );
};

export default page;
