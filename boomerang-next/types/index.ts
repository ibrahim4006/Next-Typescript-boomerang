import {MouseEventHandler, RefObject} from "react"

export interface SquareButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement> ;
    btnType?: "button" | "submit" ;
}
export interface HeroProps {
    barTitle?: string;
    pageSubject?: string;
}
export interface PanoCardProps {
    title?: string;
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
export interface LessonPartProps {
    setActiveLesson: (activeLesson: string) => void;
    studentAnswer: { [key: string]: any[] };
    activeLesson?: string;
    data: { [key: string]: any[] };
    setStudentAnswer?: (studentAnswer: string) => void;
}
export interface ClassLessonProps {
    setActiveLesson: (activeLesson: string) => void;
    studentAnswer: { [key: string]: any[] };
    activeLesson?: string;
    lesson: string;
    data: { [key: string]: any[] };
    setStudentAnswer?: (studentAnswer: string) => void;
}
export interface LessonProgressCardProps {
    title: string;
    relatedNumber?: number;
}
export interface TestPartGenelDenemeProps {
    studentAnswer: { [key: string]: any[] };
    minutes: string;
    second: string;
    activeLesson?: string;
    data: { [key: string]: any[] };
    setData: (data: { [key: string]: any[] }) => void;
    setStudentAnswer?: (studentAnswer: string) => void;
}