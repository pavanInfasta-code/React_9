import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate=useNavigate()
  return (
    <div className="login-wrapper">
      <div className="login-box">

        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Login to continue</p>

        <form>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button className="login-btn">Login</button>

          <p className="signup-text">
            Don’t have an account? <span  onClick={()=>navigate('/signup')}>Create one</span>
          </p>

        </form>

      </div>
    </div>
  )
}

export default Login
