import React from 'react';
import './travellers.css';

export default function Travellers({user}) {
  return (
    <li className="leftbar-friend">
            <img className='leftbar-friendImg' src={user.profilePicture} alt="Profile Picture" />
            <span className='leftbar-friendName'>{user.username}</span>
    </li>
  )
}
