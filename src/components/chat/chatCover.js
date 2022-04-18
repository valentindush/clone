import React from 'react'
import gif from '../img/robot.gif'
import loader from '../img/loader.gif'
export default function ChatCover() {

    const date = new Date()
  return (
    <div className='w-full relative  bg-slate-700 bg-opacity-25 pt-4'>

        <div className='text flex flex-col items-center w-full justify-center'>
            <p className='text-2xl text-slate-500'>Welcome to <span className='text-teal-700'>Clone</span></p>
            <img src={gif} alt="gif robot" className='h-[20em]' />
            <img src={loader} alt="gif robot" className='h-[5em]' />
            <p className='text-lg text-slate-500'>Select someone to chat with</p>

            <div className='absolute bottom-3'>
                <p className='text-slate-200 text-sm'>&copy;  clone by <span className='text-slate-500'>dush valentin </span> {date.getFullYear()}</p>
            </div>
        </div>
    </div>
  )
}
