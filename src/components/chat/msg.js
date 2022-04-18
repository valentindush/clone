import React from 'react'

export default function Msg(props) {

    let type = (props.type === "right")? "bg-teal-600 bg-opacity-25  mr-0 ml-auto": "bg-slate-700"

  return (
    <div className={`text-white shadow-md w-fit md:max-w-[400px] sm:max-w-[300px]  p-2 rounded-xl mt-2 ${type}`}>
        {props.text}
    </div>
  )
}
