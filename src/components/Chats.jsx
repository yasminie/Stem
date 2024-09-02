import React from 'react'
import addimg from '../img/addimg.png'

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={addimg} alt="" />
        <div className="userChatInfo">
            <span>Claudia</span>
            <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats