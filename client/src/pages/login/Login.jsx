import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className="login-wrapper">
            <div className="login-left">
                <h3 className="login-logo">Travelers</h3>
                <span className="login-description">
                    Connect with Travelers from around the world!
                </span>
            </div>
            <div className="login-right">
                <div className="login-box">
                    <input className='login-input' placeholder="Email" />
                    <input className='login-input' placeholder="Password" />
                    <button className="login-button">Login</button>
                    <span className="login-forgot">Forgot Password?</span>
                    <button className="login-register-button">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
