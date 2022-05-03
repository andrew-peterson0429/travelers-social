import React from 'react'
import "./register.css"

export default function Register() {
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
                    <input className='login-input' placeholder="First Name" />
                    <input className='login-input' placeholder="Last Name" />
                    <input className='login-input' placeholder="Email" />
                    <input className='login-input' placeholder="User Name" />
                    <input className='login-input' placeholder="Password" />
                    <input className='login-input' placeholder="Password Again" />
                    <button className="login-button">Create Account</button>
                    <span className="login-forgot">Already Have an Account?</span>
                    <button className="login-register-button">Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}
