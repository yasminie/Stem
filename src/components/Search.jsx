import React from 'react'
import addimg from '../img/addimg.png'

const Search = () => {
  return (
    <div className="search">
        <div className="search-box">
            <div className="row-search">
                <input type="text" id="input-box" placeholder="Search"/>
            </div>
        </div>
        <div className="userChat">
            <img src={addimg} alt="" />
            <div className="userChatInfo">
                <span>Claudia</span>
            </div>
        </div>
    </div>
  )
}

export default Search