import React from 'react'
import addimg from '../img/addimg.png'

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Stem</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="Display name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file">
                    <img src={addimg} alt="" />
                    <span>Add a profile picture</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Have an account? Login</p>
        </div>
    </div>
  )
}

export default Register