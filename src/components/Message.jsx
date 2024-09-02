import React from 'react'
import add from '../img/addimg.png'

const today = new Date();

function getDate() {

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear() - 2000;
    const date = today.getDate();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    return `${month}/${date}/${year} ${hours}:${minutes}`;
}

const Message = () => {
  return (
    <div className="message owner">
        <div className="messageInfo">
            <img src={add} alt="" />
            {/*<span>{getDate()}</span>>*/}
        </div>
        <div className="messageContent">
            <p>test</p>
            {/*<img src={add} alt="" />*/}
        </div>
    </div>
  )
}

export default Message