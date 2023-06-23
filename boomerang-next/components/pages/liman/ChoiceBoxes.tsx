import React from 'react'

const ChoiceBoxes = () => {
  return (
    <div className='flex justify-center items-center space-x-5'>
        <div className='circle-outer'>
            <div className='circle-inner'>A</div>
        </div>
        <div className='flex w-40 h-8 justify-center items-center border rounded-lg'>
            <div className='basis-1/2 border-r h-full flex justify-center items-center'>48.96%</div>
            <div className='basis-1/2 flex justify-center items-center'>64.12%</div>
        </div>
      
    </div>
  )
}

export default ChoiceBoxes
