import React from 'react';
import './travellers.css';

export default function Travellers({user}) {

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="leftbar-friend">
            <img className='leftbar-friendImg' src={publicFolder+user.profilePicture} alt="Profile Picture" />
            <span className='leftbar-friendName'>{user.username}</span>
    </li>
  )
}
