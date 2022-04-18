import React from 'react'

export default function UserItem(props) {
  return (
    <div onClick={props.onClick}>
      <a href={`/?ms_t=${props.to}`}>
        <div className='flex items-center justify-between pr-5 hover:bg-slate-100 hover:bg-opacity-10 p-1 cursor-pointer rounded-md'>
          <div className='flex items-center gap-[10px] mt-2'>
          <div className='img w-[50px] h-[50px]'>
            <img src={props.src}  alt="user" className='w-full h-full rounded-full'/>
          </div>
          <div>
            <div className='text-white text-lg'>{props.name}</div>
            <div className='text-white text-xs opacity-70'>{props.lastMsg}</div>
          </div>
        </div>

        <div className='time text-slate-500 font-normal text-xs'> {props.time} </div>
      </div>
      </a>
    </div>
  )
}
