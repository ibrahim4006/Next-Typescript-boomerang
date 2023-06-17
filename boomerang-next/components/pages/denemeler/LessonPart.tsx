import { LessonPartProps } from '@/types'
import React from 'react'
import { lessons } from '@/constants'
import ClassLesson from './ClassLesson'

const LessonPart = ({
    setActiveLesson,
    studentAnswer,
    activeLesson,
    data,
    setStudentAnswer
  }: LessonPartProps) => {
  return (
    <>
      {lessons.map((konu, ind) => (
        <ClassLesson
          key={ind}
          lesson={konu}
          setActiveLesson = {setActiveLesson}
          studentAnswer= {studentAnswer}
          activeLesson= {activeLesson}
          data={data}
          setStudentAnswer={setStudentAnswer}
        />
      ))}
    </>
  )
}

export default LessonPart
