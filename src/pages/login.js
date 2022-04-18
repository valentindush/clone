import React from 'react'
import Input from '../components/input'
import Label from '../components/label'

import { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { loginRoute } from '../utils/APIRoutes'
import { useNavigate } from 'react-router-dom'

export default function Login() {

const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const navigate = useNavigate()



useEffect(()=>{

  const userData  = localStorage.getItem('clone_user_data')

  if(userData){
    navigate('/')
  }

}, [])



const handleSubmit = async (e) =>{
  e.preventDefault()
  
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }
 
  
  //VALIDATION

  if(email === "" || pass === ""){
      toast.error("Incorrect email or password", toastOptions)
  }else{
    const data  = await axios.post(loginRoute, {
      email,
      password:pass
    })

    if(data.data.status === false){
      toast.error(data.data.msg, toastOptions)
    }else{
      localStorage.setItem('clone_user_data', JSON.stringify(data.data.user))
      navigate('/')
    }
  }
}

  return (
    <section className='login bg-slate-800 w-screen h-screen pt-16'>
        <div className='bg-slate-900 w-[400px] p-8 m-auto h-fit rounded-lg shadow-2xl'>
          <form className='' autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
           
           <h3 className='text-white font-normal opacity-75 text-lg'>Login into your account</h3>
           
            <Label text="Email" />
            <Input pholder="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <Label text="Password" />
            <Input pholder="Choose a password" type="password" value={pass} onChange={(e)=> setPass(e.target.value)}/>

          
            <button type='submit' className='block w-full h-[35px] bg-teal-600 hover:bg-teal-700 transition-all duration-300 mt-8 shadow-lg rounded-md text-white font-normal'>Login</button>

            <span className='text-white text-sm opacity-50'>Don't have account? <a href='/signup' className='text-teal-300'>Sign up</a></span>
          </form>
        </div>

        <ToastContainer />
    </section>
  )
}
