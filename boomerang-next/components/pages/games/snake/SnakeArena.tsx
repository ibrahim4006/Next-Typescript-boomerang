import React from 'react'
import { CANVAS_SIZE } from '@/constants'
import { SnakeArenaProps } from '@/types'

const SnakeArena = ({
  canvasRef,
  gameOver,
  correctnumber,
  combo,
  startGamePopup
}: SnakeArenaProps) => {
  return (
    <>
      <canvas
        className='border'
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      <div className="absolute top-[3%] left-[44%] text-[#f7f6f1]">
        <div>Point: {12}</div>
        <div>Seri: {4}</div>
      </div>
    </>
  )
}

export default SnakeArena
