import React from 'react';
import './feed.css';
import Share from '../../components/share/Share';
import Post from '../../components/post/Post';
import { Posts } from "../../userData";

export default function Feed() {
  return (
    <div className='feed'>

      <div className="feed-wrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
    
      </div>

    </div>
  )
}
