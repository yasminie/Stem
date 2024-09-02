import React from 'react'
import Img from '../img/addimg.png'
import Attach from '../img/clip.png'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..."/>
      <div className="send">
        <img src={Attach} alt="" style={{height:"20px", width:"20px"}}/>
        <input type="file" id="file" style={{display:"none"}}/>
        <label htmlFor="file">
          <img src={Img} alt="" style={{height:"20px", width:"20px"}}/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input