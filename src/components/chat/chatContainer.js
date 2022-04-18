import React, {useState, useEffect} from 'react'
import img from '../img/th.jpg'
import Msg from './msg'
import ChatInput from './chatInput'
export default function ChatContainer() {

  const [chats, setChats] = useState(<></>);


  const addToChats = (message, position)=>{

    let element = <Msg text={`${message}`} type={`${position}`}/>;
    setChats(<>
      {chats}
      {element}
    </>)

    
  }

  return (
    <div className='chat w-full relative  bg-slate-700 bg-opacity-25 pt-4'>

    <div className='top flex justify-between bg-slate-700 bg-opacity-10 px-2'>
      <div className='flex items-center gap-3'>
        <div className='w-[30px] h-[30px]'>
          <img src={img} alt="user"  className='w-full h-full rounded-full' />
        </div>
        <div>
          <h4 className='text-white'>Heroide</h4>
        </div>
      </div>

      <div className='icons flex '>
        <i className='fas fa-video text-white p-2 px-3 hover:bg-slate-600 hover:bg-opacity-70 cursor-pointer'></i>
        <i className='fas fa-phone text-white p-2 px-3 hover:bg-slate-600 hover:bg-opacity-70 cursor-pointer'></i>
        <i className='fas fa-search text-white p-2 px-3 hover:bg-slate-600 hover:bg-opacity-70 cursor-pointer'></i>
      </div>
    </div>



  {/* messageS */}


   <div className='px-3 py-4 h-[85vh] overflow-auto'> 
    {chats}
   </div>

    <ChatInput addToChats = {addToChats}/>


  </div>
  )
}
