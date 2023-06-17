import {MouseEventHandler, RefObject} from "react"

export interface SquareButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement> ;
    btnType?: "button" | "submit" ;
}
export interface EntranceCardProps {
    type: string;
    description?: string;
    hak?: number ;
    pointFactor?: number ;
    maxPoint?: number;
    time?: number;
    lesson?: string;
    difficulty?: string;
    subject?: string
}
export interface SnakeArenaProps {
    canvasRef: RefObject<HTMLCanvasElement>;
    gameOver?: string;
    correctnumber?: number ;
    combo?: number ;
    startGamePopup?: MouseEventHandler<HTMLButtonElement>;
}