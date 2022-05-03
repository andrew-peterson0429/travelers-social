// Imports automatically, so dont need
import React from 'react';
import './home.css';
import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Home() {
  return (
    // <> are fragments to allow multiple components together
    <>
    <Topbar/>
      <div className="home-container">

        <Leftbar/>
        <Feed/>
        <Rightbar/>

      </div>
    </>
  )
}
