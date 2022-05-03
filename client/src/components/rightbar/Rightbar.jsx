import React from 'react';
import './rightbar.css';
import { Users } from "../../userData";
import OnlineTravellers from '../../components/onlineTravellers/OnlineTravellers';

// Takes prop profile sent by profile page
export default function Rightbar({profile}) {

  const HomeRightBar = () => {
    return (
      <>
       <div className="birthday-container">

      <img className='birthday-img' src="/assets/heart.png" alt="heart" />
      <span className="birthday-txt"><b>Paul Cheney</b> and <b>3 others</b> have a birthday today</span>

      </div>

      <img className='right-bar-ad' src="/assets/uvu-ad.jpg" alt="Ad for UVU" />

      <h4 className='right-bar-title'>Online Fellow Travellers</h4>

      <ul className='right-bar-traveller-list'>

      {/* For each user return online travelers component and passes in user with user id as key*/}
      {Users.map(u => (
        <OnlineTravellers key={u.id} user={u}/>
      ))}

      </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='right-bar-title'>Traveller Information</h4>
        <div className="right-bar-info">
          
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Nationality: </span>
            <span className="right-bar-info-value">United States</span>
          </div>

          <div className="right-bar-info-item">
            <span className="right-bar-info-key">From: </span>
            <span className="right-bar-info-value">Utah</span>
          </div>

          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Favorite Destination: </span>
            <span className="right-bar-info-value">San Diego</span>
          </div>

          <h4 className='right-bar-title'>Followed Travelers</h4>
          
          <div className="right-bar-followed-travellers">

            <div className="right-bar-following">
              <img src="/assets/people/thor.png" alt="" className="right-bar-following-img" />
              <span className="right-bar-following-name">Thor Anderson</span>
            </div>

            <div className="right-bar-following">
              <img src="/assets/people/paul.jpg" alt="" className="right-bar-following-img" />
              <span className="right-bar-following-name">Paul Cheney</span>
            </div>

            <div className="right-bar-following">
              <img src="/assets/people/andrew.jpg" alt="" className="right-bar-following-img" />
              <span className="right-bar-following-name">Andrew Peterson</span>
            </div>

            <div className="right-bar-following">
              <img src="/assets/people/person1.jpg" alt="" className="right-bar-following-img" />
              <span className="right-bar-following-name">Danila Lubov</span>
            </div>

            <div className="right-bar-following">
              <img src="/assets/people/raine.jpg" alt="" className="right-bar-following-img" />
              <span className="right-bar-following-name">Raine Peterson</span>
            </div>

            <div className="right-bar-following">
              <img src="/assets/people/person1.jpg" alt="" className="right-bar-following-img" />
              <span className="right-bar-following-name">Moe Peterson</span>
            </div>

            <div className="right-bar-following">
              <img src="/assets/people/person1.jpg" alt="" className="right-bar-following-img" />
              <span className="right-bar-following-name">Lavina Page</span>
            </div>

            <div className="right-bar-following">
              <img src="/assets/people/person1.jpg" alt="" className="right-bar-following-img" />
              <span className="right-bar-following-name">Echo Crawford</span>
            </div>

            <div className="right-bar-following">
              <img src="/assets/people/person1.jpg" alt="" className="right-bar-following-img" />
              <span className="right-bar-following-name">Zilla Bowie</span>
            </div>

          </div>

        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="right-bar-wrapper"></div>
      {/* If there is prop profile add ProfileRightBar, if not add HomeRightBar */}
      {profile ? <ProfileRightBar/> : <HomeRightBar/>}
    </div>
  )

}
  
