import React from 'react'
import Post from '../Post/Post'
import Share from '../Share/Share'
import "./Timeline.css"

export default function Timeline() {
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share/>
        <Post/>
      </div>
    </div>
  )
}
