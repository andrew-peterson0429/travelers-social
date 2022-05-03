import React from 'react';
import "./profile.css";
import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';


export default function Profile() {
  return (
    <>
    <Topbar/>
      <div className="profile">

        <Leftbar/>
        <div className="profile-right">
            <div className="profile-right-top">
                <div className="profile-cover">
                    <img className='profile-cover-img' src="assets/asia-photo1.jpg" alt="Profile Picture" />
                    <img className='profile-user-img' src="assets/people/landon.jpg" alt="Profile Picture" />
                </div>
                <div className="profile-info">
                    <h4 className='profile-info-name'>Landon Conover</h4>
                    <p className='profile-info-description'>Avid coder and soap box star.</p>
                </div>
            </div>
            <div className="profile-right-bottom">
                <Feed/>
                <Rightbar profile/>
            </div>

        </div>

      </div>
    </>
  )
}
