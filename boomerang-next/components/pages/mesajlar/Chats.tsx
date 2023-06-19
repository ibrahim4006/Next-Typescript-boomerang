import React from 'react'
import MessageUserContainer from './MessageUserContainer'

const Chats = () => {
  return (
    <div className='h-[90%] flex-col overflow-scroll pt-14'>
      <MessageUserContainer />
      <MessageUserContainer />
      <MessageUserContainer />
      <MessageUserContainer />
      <MessageUserContainer />
    </div>
  )
}

export default Chats
