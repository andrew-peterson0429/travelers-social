import React from 'react';
import { useEffect, useState } from 'react';
import './feed.css';
import Share from '../../components/share/Share';
import Post from '../../components/post/Post';
import { LineAxisOutlined } from '@mui/icons-material';
import axios from 'axios';


export default function Feed() {

  // Setting initial state as empty array
  const [posts, setPosts] = useState([]);

  // when pages is renders, load data with dependancy on loading only once
  // after request gives response that is set to variable
  useEffect( ()=> {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/626e07c78f4c530becc4d628");
      console.log(res);
      //sets posts from the responses data
      setPosts(res.data);
    };
    fetchPosts();
    
  }, [])

  return (
    <div className='feed'>

      <div className="feed-wrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
    
      </div>

    </div>
  )
}
