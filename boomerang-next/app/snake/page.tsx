"use client";

import { Hero, SquareButton } from "@/components/common";
import SnakeArena from "@/components/pages/games/snake/SnakeArena";
import { useRef, useState } from "react";
import { SNAKE_START, APPLE_START, DIRECTIONS } from "@/constants";

const Snake = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -0.5]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [currentDirection, setCurrentDirection] = useState("up");

  const moveSnake = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // const { key } = event;
    // if (key === "ArrowLeft" && currentDirection !== "right") {
    //   setCurrentDirection("left");
    //   event.preventDefault();
    //   setDir(DIRECTIONS[key]);
    // } else if (key === "ArrowUp" && currentDirection !== "down") {
    //   setCurrentDirection("up");
    //   event.preventDefault();
    //   setDir(DIRECTIONS[key]);
    // } else if (key === "ArrowRight" && currentDirection !== "left") {
    //   setCurrentDirection("right");
    //   event.preventDefault();
    //   setDir(DIRECTIONS[key]);
    // } else if (key === "ArrowDown" && currentDirection !== "up") {
    //   setCurrentDirection("down");
    //   event.preventDefault();
    //   setDir(DIRECTIONS[key]);
    // }
  };

  return (
    <main>
      <Hero />
      <div className="flex relative w-full">
        <div
          className="flex-1 bg-[#0d0d0d] flex text-[#f7f6f1]"
          role="button"
          tabIndex={0}
          onKeyDown={moveSnake}
        >
          <SnakeArena canvasRef={canvasRef} />
        </div>
        <div className="flex-1 flex-col justify-start ">
          <div className="h-[90%] w-full flex justify-between items-center border-b-2 border-black">
            Hello
          </div>
          <div className="h-[10%] w-full flex justify-start space-x-4 items-center">
            <SquareButton title="Sonraki Soru" containerStyles="square-btn-m"/>
            <SquareButton title="Testi Bitir" containerStyles="square-btn-s"/>
            <SquareButton title="Mücadeleden Çekil" containerStyles="square-btn-l"/>
            <SquareButton title="Konu Değiştir" containerStyles="square-btn-m"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Snake;
