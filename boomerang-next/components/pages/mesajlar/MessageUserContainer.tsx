import React from 'react'

const MessageUserContainer = () => {
  return (
    <div className='w-full flex justify-start border-b cursor-pointer p-3'>
      <div className='w-full flex-col justify-center ml-[10%]'>
        <div className='text-lg'><b>İbrahim Ergen</b></div>
        <div className='text-sm'><p>Ödevi yaptın mı</p></div>
      </div>
    </div>
  )
}

export default MessageUserContainer
