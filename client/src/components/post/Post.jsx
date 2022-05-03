import React, { useState } from 'react'
import './post.css';
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../userData";

export default function Post({ post }) {

  const [like, setLike] = useState(post.likes)
  const [isLiked, setIsLiked] = useState(false)
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  // If it is already liked, minus 1, if not liked before plus 1. Sets isLiked to either true or false
  const likeHandler =() => {
    setLike(isLiked ? like -1 : like +1)
    setIsLiked(!isLiked)
  }
  
  return (
    <div className='post'>
      <div className="post-wrapper">

        <div className="post-top">

          <div className="post-top-left">
            <img className='post-profile-img' src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="Profile Picture" />
            {/* Filters user id to find actual user */}
            <span className='post-user-name'>{Users.filter(u => u.id === post.userId)[0].username}</span>
            <span className='post-date'>{post.date}</span>
          </div>

          <div className="post-top-right">
            <MoreVert />
          </div>

        </div>
        <div className="post-center">

          <span className='post-txt'>{post?.desc}</span>
          <img className='post-img' src={publicFolder+post.photo} alt="post picture" />

        </div>

        <div className="post-bottom">

          <div className="post-bottom-left">
            <img className='like-icon' src={`${publicFolder}thumbs-up.png`} onClick={likeHandler} alt="heart icon" />  
            <img className='like-icon' src={`${publicFolder}heart.png`} onClick={likeHandler} alt="heart icon" />
            <span className='post-counter'>{like} likes</span>
          </div>
          <div className="post-bottom-right">
            <span className='post-comment-txt'>{post.comments} comments</span>
          </div>

        </div>

      </div>
    </div>
  )
}
