import { ClassLessonProps } from "@/types";
import { useState, useEffect, useRef } from "react";
import LessonProgressCard from "./LessonProgressCard";
import Image from "next/image";
import Link from "next/link";

interface LessonTimeTaken {
  [key: string]: number[];
}

const ClassLesson = ({
  lesson,
  setActiveLesson,
  studentAnswer,
  activeLesson,
  data,
  setStudentAnswer,
}: ClassLessonProps) => {
  const [showLessonDetail, setShowLessonDetail] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentLesson, setCurrentLesson] = useState<string | null>(
    activeLesson ?? null
  );
  const [timeTaken, setTimeTaken] = useState(0);
  const [lessonTimeTaken, setLessonTimeTaken] = useState<LessonTimeTaken>({});
  const isMounted = useRef(false); // Flag to track component mount state

  const startTimer = () => {
    setStartTime(performance.now());
  };

  const stopTimer = () => {
    if (startTime) {
      const currentTime = performance.now();
      const newTimeTaken = currentTime - startTime;
      setTimeTaken(newTimeTaken);
      setLessonTimeTaken((prevLessonTimeTaken) => {
        const newLessonTimeTaken: LessonTimeTaken = { ...prevLessonTimeTaken };
        if (!newLessonTimeTaken[currentLesson as string]) {
          newLessonTimeTaken[currentLesson as string] = [newTimeTaken];
        } else {
          newLessonTimeTaken[currentLesson as string][0] += newTimeTaken;
        }
        return newLessonTimeTaken;
      });
      setStartTime(null); // Reset the start time after stopping the timer
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      stopTimer(); // Stop the timer when activeLesson changes
      startTimer(); // Start the timer for the new activeLesson
      setCurrentLesson(activeLesson ?? null);
    } else {
      isMounted.current = true; // Set the flag to true after initial run
    }
  }, [activeLesson]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleClickLesson = (lesson: string) => {
    stopTimer(); // Stop the timer when a new lesson is clicked
    setStartTime(performance.now()); // Start the timer for the new lesson
    setShowLessonDetail(!showLessonDetail);
    setActiveLesson(lesson);
  };

  return (
    <div
      className="font-bold flex-col justify-start border-b border-black pt-4 pb-3 hover:cursor-pointer hover:m-1"
      onClick={() => handleClickLesson(lesson)}
    >
      <h1 className="pl-[17%] text-xl">{lesson}</h1>
      {showLessonDetail && activeLesson === lesson && (
        <div className="lessonprogresscard">
          <LessonProgressCard
            title="Soru Sayısı"
            relatedNumber={data[lesson] && data[lesson].length }
          />
          <LessonProgressCard
            title="Kalan Soru"
            relatedNumber={
              studentAnswer[lesson] && data[lesson]
                ? data[lesson].length -
                  studentAnswer[lesson].filter((answer) => answer !== null)
                    .length
                : undefined
            }
          />
          <LessonProgressCard
            title="Geçen Süre"
            relatedNumber={
              lessonTimeTaken[activeLesson] &&
              Number(formatTime(lessonTimeTaken[activeLesson][0] / 1000)) // Convert milliseconds to seconds
            }
          />
          {showLessonDetail && (
              <Image
                src="/denemeboomerang.svg"
                alt="Boomerang Ok"
                className="absolute right-1 top-2.5"
                width={40}
                height={40}
              />
          )}
        </div>
      )}
    </div>
  );
};

export default ClassLesson;
