import {useEffect,useState} from 'react'
import UserItem from './userItem'
import img from '../img/th.jpg'
import axios from 'axios'
import { usersRoute } from '../../utils/APIRoutes'

export default function Users() {

    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [currentChat, setCurrentChat] = useState([])

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('clone_user_data'))
        setCurrentUser(user)
        console.log("user"+currentUser)
    },[])

    const getUsers = async ()=>{
        const data = await axios.get(usersRoute, {id: currentUser._id})  
        setUsers(data.data.users)   
        
    }  
useEffect( ()=>{
    getUsers()
    // console.log(users);
}, [])

const handeleSetCurrentChat = (e)=>{

}

  return (
    <div className='w-[20vw] min-w-[300px] p-2 '>
        <header className='flex justify-between items-center'>
            <h3 className='text-white text-xl font-regular'>Chats</h3>
            <div>
                <i class="fa-solid fa-plus text-white text-xl hover:bg-slate-500 hover:bg-opacity-30 cursor-pointer p-1 px-3"></i>
                <i class="fa-solid fa-gear text-white text-xl hover:bg-slate-500 hover:bg-opacity-30 cursor-pointer p-1 px-3"></i>  
            </div>
        </header>
        <div className='search pr-4 py-1'>
            <input type={'text'} className='w-full p-[4px] pl-4 text-sm rounded-md text-white bg-slate-600 outline-none border-b-2 hover:bg-slate-900 focus:bg-slate-900 focus:border-teal-600' placeholder='Search or start a new chat'/>
        </div>
        <div className='users h-[85vh] overflow-auto pr-3 relative'>          
            {users.length > 0 && (
                <>
                {users.map(user => (
                    <UserItem name={user.username} lastMsg = "Hahiye blada" src={img} time="11 : 12 PM" onClick={handeleSetCurrentChat} />
                ))}
                </>                
            )}

            <div className='current flex items-center gap-2 bg-teal-700 bg-opacity-70 px-2 py-2 rounded-lg shadow-lg absolute w-full bottom-2 cursor-pointer hover:bg-opacity-80 transition-all duration-300'>
                <div className='w-[30px]'>
                    <img src={img} className="rounded-full" alt='profile' />
                </div>
                <div>
                    <span className='text-white text-sm'>Pro Ghee</span>
                </div>
            </div>
        </div>
    </div>
  )
}


