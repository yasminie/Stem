import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Stem</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Sign In</button>
            </form>
            <p>Need an account? Register</p>
        </div>
    </div>
  )
}

export default Login