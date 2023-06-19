"use client"

import Image from 'next/image';
import {useState} from 'react'

const InputMessage = () => {
    const [inputValue, setInputValue] = useState("");
  return (
    <div className='h-[7%] border border-white flex justify-between items-center p-4'>
        <input
        type="text"
        placeholder="Mesaj Gönder..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='w-[92%] text-[white] bg-transparent p-2'
      />
      <Image
            src="/messagesendicon.svg"
            alt="boomerang icon"
            width={25}
            height={25}
            className="object-contain mr-2"
          />
    </div>
  )
}

export default InputMessage
