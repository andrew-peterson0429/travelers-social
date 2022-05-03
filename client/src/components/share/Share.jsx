import React from 'react';
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
  return (
    <div className='share'>

      <div className="share-wrapper">

        <div className="share-top">
          <img className='share-profile-img' src="/assets/people/landon.jpg" alt="Profile Picture" />
          <input placeholder='What do you want to share?' className='share-input'/>
        </div>
        <hr className='share-hr'/>

        <div className="share-bottom">

          <div className="share-options">

            <div className="share-option">
              <PermMedia htmlColor='tomato' className='share-icon'/>
              <span className='share-option-txt'>Photo or Video</span>
            </div>

            <div className="share-option">
              <Label htmlColor='blue' className='share-icon'/>
              <span className='share-option-txt'>Tag</span>
            </div>

            <div className="share-option">
              <Room htmlColor='green' className='share-icon'/>
              <span className='share-option-txt'>Location</span>
            </div>

            <div className="share-option">
              <EmojiEmotions htmlColor='goldenrod' className='share-icon'/>
              <span className='share-option-txt'>Feelings</span>
            </div>

          </div>

          <button className='share-btn'>Share</button>

        </div>

      </div>

    </div>
  )
}
