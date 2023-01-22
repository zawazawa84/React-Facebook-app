import React from 'react'
import "./Profile.css"
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Topbar from '../../components/topbar/Topbar'


export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
              <img src={PUBLIC_FOLDER + "/post/3.jpeg"} alt="" className="profileCoverImg"/>
              <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className='profileUserImg'/>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">相澤</h4>
              <span className="profileInfoDesc">九州大学</span>
            </div>
            <div className="profileRightBottom">
              <Timeline/>
              <Rightbar profile/>
            </div>
        </div>
      </div>
    </>
  )
}
