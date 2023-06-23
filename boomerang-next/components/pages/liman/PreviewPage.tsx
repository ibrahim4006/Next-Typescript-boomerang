import { SquareButton } from "@/components/common";
import { PreviewPageProps } from "@/types";
import Image from "next/image";
import React from "react";

const PreviewPage = ({
  isAddQuestionPageShow,
  setisAddQuestionPageShow,
  setisPreviewPageShow,
}: PreviewPageProps) => {
  return (
    <div className="w-2/3 ml-auto mr-auto border mt-[5%] mb-[5%] flex-col justify-start">
      <div className="w-full h-24 border-b pl-10 font-bold text-2xl flex justify-between items-center uppercase">
        Yeni Soru
      </div>
      <div className="flex justify-start items-center h-auto w-full border-b">
        <Image
          src="/example.svg"
          alt="Preview image"
          className="basis-1/2 object-cover border-r p-5"
          width={450}
          height={450}
        />
        <div>HEllo world</div>
      </div>
      <div className="flex justify-start items-center space-x-5 h-20 pl-5 relative">
        <SquareButton
          title="Image Upload"
          containerStyles="square-btn-m"
          handleClick={() => {
            setisPreviewPageShow(false);
            setisAddQuestionPageShow(true);
          }}
        />
        <SquareButton
          title="Seçenekleri Ayarla"
          containerStyles="square-btn-l"
          handleClick={() => setisAddQuestionPageShow(true)}
        />
        <div className="absolute right-10">
          <SquareButton title="Tamamla" containerStyles="square-btn-s" />
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
