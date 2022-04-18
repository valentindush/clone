import React from 'react'
import Input from '../components/input'
import Label from '../components/label'

import { useState, useEffect } from 'react'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { registerRoute } from '../utils/APIRoutes'
import { useNavigate } from 'react-router-dom'


export default function Sign() {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const [confPass, setConfPass] = useState('')

const navigate = useNavigate()




//Check if use is loged in

useEffect(()=>{

  const userData  = localStorage.getItem('clone_user_data')

  if(userData){
    navigate('/')
  }

}, [])

const handleSubmit = async(e) =>{
  e.preventDefault()
  
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }
  //Validation

  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if(name === "" || email === "" || pass === "" || confPass===""){
    toast.error("All fields are required", toastOptions)
  }else if(name.length < 3 || name.length > 16){
    toast.error("Name must be more than 3 characters and not more than 16", toastOptions)
  }else if(!email.match(mailformat)){
    toast.error("Invalid email address", toastOptions)
  }else if(pass.length < 6){
    toast.error("Password must be greater than 6 chars", toastOptions)
  }else if(pass !== confPass){
    toast.error("Passwords do not match", toastOptions)
  }else{
      const {data} = await axios.post(registerRoute, {
          name,
          email,
          password: pass,
          cpassword: confPass
        })

      if(data.status === false){
        toast.error(data.msg, toastOptions)
      }else{
        localStorage.setItem('clone_user_data', JSON.stringify(data.user))
        navigate('/')
      }
  }


}

  return (
    <section className='login bg-slate-800 w-screen h-screen pt-16'>
        <div className='bg-slate-900 w-[400px] p-8 m-auto h-fit rounded-lg shadow-2xl'>
          <form className='' autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
           
           <h3 className='text-white font-normal opacity-75 text-lg'>Create a new account</h3>
            <Label text="Username" />
            <Input pholder="Username" type="text" value={name}  onChange={(e)=> setName(e.target.value)} />

            <Label text="Email" />
            <Input pholder="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <Label text="Password" />
            <Input pholder="Choose a password" type="password" value={pass} onChange={(e)=> setPass(e.target.value)}/>

            <Label text="Confirm password" />
            <Input pholder="Confirm password" type="password" value={confPass} onChange={(e)=>setConfPass(e.target.value)} />

            <button className='block w-full h-[35px] bg-teal-600 hover:bg-teal-700 transition-all duration-300 mt-8 shadow-lg rounded-md text-white font-normal'>Sign up</button>

            <span className='text-white text-sm opacity-50'>Already have account? <a href='/login' className='text-teal-300'>Login now</a></span>
          </form>
        </div>

        <ToastContainer />
    </section>
  )
}
