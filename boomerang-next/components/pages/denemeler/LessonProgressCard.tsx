import { LessonProgressCardProps } from '@/types'
import React from 'react'

const LessonProgressCard = ({
    title,
    relatedNumber
  }: LessonProgressCardProps) => {
  return (
    <div className="flex-col justify-start mr-[10%] mt-8">
      <span className="icon-plus">+</span>
      <p className='text-xs font-light ml-2'>{title}</p>
      <h1 className='text-[60px] ml-16'>{relatedNumber ? relatedNumber : "0"}</h1>
    </div>
  )
}

export default LessonProgressCard
