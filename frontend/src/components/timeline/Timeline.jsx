import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import Share from '../Share/Share'
import "./Timeline.css"
import axios from "axios"

export default function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await axios.get("/posts/timeline/63caea0512f6519c972568e5");
      setPosts(response.data)
    };
    fetchPosts();
  },[])

  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share/>
        {posts.map((post)=>(
            <Post post={post} key={post.id}/>
        ))}
      </div>
    </div>
  )
}
