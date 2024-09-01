import React from 'react'
import addimg from '../img/addimg.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Stem</span>
        <div className="user">
            <img src={addimg} alt="" />
            <span>Yasminie</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar