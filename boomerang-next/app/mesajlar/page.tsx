import { Hero } from "@/components/common";
import Chats from "@/components/pages/mesajlar/Chats";
import InputMessage from "@/components/pages/mesajlar/InputMessage";
import Messages from "@/components/pages/mesajlar/Messages";
import Search from "@/components/pages/mesajlar/Search";
import React from "react";

const Mesajlar = () => {
  return (
    <main>
      <Hero />
      <div className="flex">
        <div className="flex-1 h-[60vw] border flex-col">
            <Search />
            <Chats />
        </div>
        <div className="flex-1 h-[60vw] border bg-[#0D0D0D] color-[#F7F6F1] flex-col">
            <div className="h-[25%] border border-white text-[#F7F6F1] flex justify-end items-end pr-[5%] pb-[1%] capitalize">İbrahim Ergen</div>
            <Messages />
            <InputMessage />
        </div>
      </div>
    </main>
  );
};

export default Mesajlar;
