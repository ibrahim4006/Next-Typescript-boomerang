"use client";

import { Hero } from "@/components/common";
import { useRecorderPermission } from "@/components/common/useRecorderPermission";
import LessonPart from "@/components/pages/denemeler/LessonPart";
import TestPartGenelDeneme from "@/components/pages/denemeler/TestPartGenelDeneme";
import { useState, useRef, useEffect } from "react";
import { invokeSaveAsDialog } from "recordrtc";

const GenelDeneme = () => {
  const recorder = useRecorderPermission("canvas");

  const startRecording = async () => {
    recorder.startRecording();
  };

  const stopRecording = async () => {
    await recorder.stopRecording();
    let blob = await recorder.getBlob();
    invokeSaveAsDialog(blob, `random_name.webm`);
  };
  const [isTimerOn, setIsTimerOn] = useState(false);

  const [studentAnswer, setStudentAnswer] = useState({});
  const [data, setData] = useState({});
  const [activeLesson, setActiveLesson] = useState("");

  const [minutes, setMinutes] = useState("10");
  const [second, setSecond] = useState("00");

  const [countDown, setCountdown] = useState(600);

  const timerId = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (isTimerOn) {
      return;
    }
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => {
    setSecond(countDown < 10 ? "0" + countDown : String(countDown % 60));
    setMinutes(
      countDown < 60
        ? "00"
        : countDown < 600
        ? "0" + Math.floor(countDown / 60)
        : String(Math.floor(countDown / 60))
    );
    if (countDown <= 0) {
      clearInterval(timerId.current);
      setIsTimerOn(false);
      alert("end");
    }
  }, [countDown]);

  return (
    <main>
      <Hero pageSubject="MİNİ DENEME" barTitle="Mini Deneme" />
      {/* <div>
        <button onClick={startRecording}> Start recording</button>
        <button onClick={stopRecording}> Stop recording</button>
      </div> */}
      <LessonPart
        setActiveLesson={setActiveLesson}
        studentAnswer={studentAnswer}
        activeLesson={activeLesson}
        data={data}
        setStudentAnswer={setStudentAnswer}
      />
      <TestPartGenelDeneme
        activeLesson={activeLesson}
        minutes={minutes}
        second={second}
        studentAnswer={studentAnswer}
        setStudentAnswer={setStudentAnswer}
        data={data}
        setData={setData}
      />
    </main>
  );
};

export default GenelDeneme;
