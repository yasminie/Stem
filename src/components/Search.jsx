import React from 'react'
import addimg from '../img/addimg.png'

const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input type="text" placeholder="Search"/>
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