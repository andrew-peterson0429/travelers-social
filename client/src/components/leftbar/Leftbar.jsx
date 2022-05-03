import React from 'react'
import './leftbar.css';
import { RssFeed, Chat, PlayCircleFilled, Group, Bookmark, Event } from "@mui/icons-material";
import Travellers from '../../components/travellers/Travellers';
import { Users } from "../../userData";


export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="leftbar-wrapper">
        <ul className="leftbar-list">

          <li className='leftbar-listItem'>
            <RssFeed className='leftbar-icon'/> Feed
            <span className="leftbar-listItem-text"></span>
          </li>

          <li className='leftbar-listItem'>
            <Chat className='leftbar-icon'/> Messages
            <span className="leftbar-listItem-text"></span>
          </li>

          <li className='leftbar-listItem'>
            <PlayCircleFilled className='leftbar-icon'/> Videos
            <span className="leftbar-listItem-text"></span>
          </li>

          <li className='leftbar-listItem'>
            <Group className='leftbar-icon'/> Groups
            <span className="leftbar-listItem-text"></span>
          </li>

          <li className='leftbar-listItem'>
            <Bookmark className='leftbar-icon'/> Bookmarks
            <span className="leftbar-listItem-text"></span>
          </li>

          <li className='leftbar-listItem'>
            <Event className='leftbar-icon'/> Events
            <span className="leftbar-listItem-text"></span>
          </li>

        </ul>

        <button className="leftbar-btn">More</button>

        <hr className='leftbar-hr'></hr>

        <ul className="leftbar-friendList">
          {/* For each user returns the travellers component*/}
          {Users.map(u => (
            <Travellers key={u.id} user={u}/>
          ))}


        </ul>

      </div>
    </div>
  )
}
