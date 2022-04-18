import React from 'react'

export default function Input(props) {
  return (
    <input type={props.type} placeholder={props.pholder} onChange={props.onChange} value={props.value} className='w-full bg-transparent border-b-2 px-2 outline-none text-white py-1 focus:border-teal-500'autoComplete='off'/>
  )
}
