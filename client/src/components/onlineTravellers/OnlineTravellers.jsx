import React from 'react'
import './onlineTravellers.css';
import { Users } from "../../userData";

// Takes users as a parameter
export default function onlineTravellers({user}) {
  return (
    <li className="right-bar-traveller">
        <div className="right-bar-profile-img-container">
            <img className='right-bar-profile-img' src={user.profilePicture} alt="Profile image" />
            <span className='right-bar-online'></span>
        </div>
        <span className='right-bar-user-name'>{user.username}</span>
    </li>
  )
}
