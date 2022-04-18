import React, {useEffect} from 'react'
import ChatContainer from '../components/chat/chatContainer'

import Users from '../components/chat/users'
import { useNavigate } from 'react-router-dom'


export default function Chat() {

  const navigate = useNavigate()

  useEffect(()=>{
    const user = localStorage.getItem('clone_user_data')
    console.log(user)
    if(!user){
      navigate('/login')
    }
  },[])

  return (
    <section className='w-full  flex bg-slate-800 p-3'>
      <Users/>
      {/* <ChatCover/> */}
      <ChatContainer/>
    </section>
  )
}
