import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function Topbar() {
  return (
    <div className='topbar-container'>

        <div className="topbar-left">
          <Link to="/" style={{textDecoration:'none'}}>
            <span className='topbar-logo'>Travelers</span>
          </Link>
        </div>

        <div className="topbar-center">
          <div className="searchbar">
            <Search className='search-icon' />
            <input placeholder='Search' className="search-input" />
          </div>
        </div>

        <div className="topbar-right">

          <div className="topbar-links">
            <span className="topbar-link">Homepage</span>
            <span className="topbar-link">Timeline</span>
          </div>

          <div className="topbar-icons">

            <div className="topbar-icon-item">
              <Person/>
              <span className="topbar-icon-badge">1</span>
            </div>

            <div className="topbar-icon-item">
              <Chat/>
              <span className="topbar-icon-badge">2</span>
            </div>

            <div className="topbar-icon-item">
              <Notifications/>
              <span className="topbar-icon-badge">5</span>
            </div>

          </div>

          <img src="/assets/people/landon.jpg" alt="profile picture" className="topbar-profile-img" />
          
        </div>
        
    </div>
  )
}
