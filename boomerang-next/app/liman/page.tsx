"use client";
import { Hero, SquareButton } from "@/components/common";
import React, { useState } from "react";
import { lessons } from "@/constants";
import Image from "next/image";
import QuestionType from "@/components/pages/liman/QuestionType";
import AddQuestion from "@/components/pages/liman/AddQuestion";
import PreviewPage from "@/components/pages/liman/PreviewPage";

const page = () => {
  const [isAddQuestionPageShow, setisAddQuestionPageShow] =
    useState<boolean>(false);
  const [ispreviewPageShow, setisPreviewPageShow] =
    useState<boolean>(false);
    const [ischoicePageOpen, setischoicePageOpen] = useState<boolean>(true);
  return (
    <main>
      <Hero barTitle="Liman" pageSubject="Liman" />
      {isAddQuestionPageShow ? (
        <AddQuestion ischoicePageOpen={ischoicePageOpen} setischoicePageOpen={setischoicePageOpen} isAddQuestionPageShow={isAddQuestionPageShow} setisAddQuestionPageShow={setisAddQuestionPageShow} setisPreviewPageShow={setisPreviewPageShow}/>
      ) : ispreviewPageShow ? <PreviewPage setischoicePageOpen={setischoicePageOpen} isAddQuestionPageShow={isAddQuestionPageShow} setisAddQuestionPageShow={setisAddQuestionPageShow} setisPreviewPageShow={setisPreviewPageShow} /> : (
        <QuestionType
          setisAddQuestionPageShow={setisAddQuestionPageShow}
        />
      )}
    </main>
  );
};

export default page;
