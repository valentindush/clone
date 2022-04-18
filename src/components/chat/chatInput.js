import React, {useState} from 'react'
import EmojiPicker from 'emoji-picker-react';
import styled from "styled-components";

export default function ChatInput(props) {

    const [msg, setMsg] = useState("")
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const handleEmojiPickerhideShow = () => {
      setShowEmojiPicker(!showEmojiPicker);
    };
  
    const handleEmojiClick = (event, emojiObject) => {   
        setMsg(msg + emojiObject.emoji)
    };

    const scrollBottom = (el)=>{
      el.scrollTop = el.scrollHeight
    }

  return (
    <Container>
        {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        <div className='form absolute bottom-1 p-1 bg-slate-800 w-full px-2 flex items-center'>
        <div>
            <i className='fa-solid fa-face-laugh text-white font-light' onClick={handleEmojiPickerhideShow}></i>
            
        </div>
        <input type={'text'} placeholder="Type a message ..." className='w-[95%] h-[40px] px-4 pl-24 bg-transparent outline-none text-white' value={msg} onChange={(e)=>setMsg(e.target.value)} onKeyUp={(e)=>{
          if(e.key === "Enter"){
            if(msg !== ""){
              props.addToChats(msg, "right")
              
              setMsg('')
            }
          }
        }}/>
        <div>
            <i className='fa-solid fa-paper-plane text-lg text-teal-200 p-2 px-4 hover:bg-slate-600 cursor-pointer' onClick={()=>{
              props.addToChats(msg, "right")
              setMsg('')
            }}></i>
        </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    .emoji-picker-react {
       position: absolute;
       bottom:5em;
        background-color: #080420;
        box-shadow: 0 5px 2px rgb(30 41 59);
        border-color: #1111;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: rgb(30 41 59);
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
          color: #fff;
        }
        .emoji-group:before {
          background-color: #080420;
        }
      }
    }
`