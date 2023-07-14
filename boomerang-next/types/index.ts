import { MouseEventHandler, RefObject } from "react";

/* Start: Common Sections */

export interface SquareButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface HeroProps {
  barTitle?: string;
  pageSubject?: string;
}
export interface PanoCardProps {
  title?: string;
}

/* End: Common Sections */

/* Start: Deneme Sections */

export interface EntranceCardProps {
  type: string;
  description?: string;
  hak?: number;
  pointFactor?: number;
  maxPoint?: number;
  time?: number;
  lesson?: string;
  difficulty?: string;
  subject?: string;
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

/* End: Deneme Sections */

/* Start: Game Sections */

export interface SnakeArenaProps {
  canvasRef: RefObject<HTMLCanvasElement>;
  gameOver?: string;
  correctnumber?: number;
  combo?: number;
  startGamePopup?: MouseEventHandler<HTMLButtonElement>;
}

/* End: Game Sections */

/* Start: Liman Sections */

export interface QuestionTypeProps {
  setisAddQuestionPageShow: (isAddQuestionPageShow: boolean) => void;
  activeLesson: string;
  activeClass: string;
  activeSubjects: string;
  activeChapter: string;
  activedifficulty: string;
  setActiveLesson: (activeLesson: string) => void;
  setActiveClass: (activeClass: string) => void;
  setActiveSubjects: (activeSubjects: string) => void;
  setActiveChapter: (activeChapter: string) => void;
  setDifficulty: (difficulty: string) => void;
}
export interface AddQuestionProps {
  preview: File | null;
  setisAddQuestionPageShow: (isAddQuestionPageShow: boolean) => void;
  isAddQuestionPageShow: boolean;
  setisPreviewPageShow: (ispreviewPageShow: boolean) => void;
  setischoicePageOpen: (ischoicePageOpen: boolean) => void;
  ischoicePageOpen: boolean;
  setPreview: (preview: File) => void;
}
export interface PreviewPageProps {
  setisAddQuestionPageShow: (isAddQuestionPageShow: boolean) => void;
  isAddQuestionPageShow: boolean;
  setisPreviewPageShow: (ispreviewPageShow: boolean) => void;
  setischoicePageOpen: (ischoicePageOpen: boolean) => void;
  classes: string;
  lesson: string;
  chapter: string;
  subject: string;
  difficulty: string;
  preview: File | null;
}
type Point = {
  x: number;
  y: number;
};

export interface RectangleDrawerProps {
  setPoints: (points: Point[]) => void;
  points: Point[];
  preview: File | null;
}
export interface SetQuestionChoicesProps {
    preview: File | null;
  }
export interface ChoiceBoxesProps {
  points: Point;
  direction: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
  isActive: boolean;
}
export interface AnswerBoxesProps {
  choice: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean
}

/* End: Liman Sections */
