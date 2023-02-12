import React, {useState, useEffect}from 'react'
import "./Profile.css"
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Topbar from '../../components/topbar/Topbar'
import axios from 'axios'


export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({})

  useEffect(()=>{
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=Aizawa`);
      setUser(response.data)
      console.log(response.data)
    };
    fetchUser();
  },[])
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
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
            <div className="profileRightBottom">
              <Timeline username="Aizawa"/>
              <Rightbar user={user}/>
            </div>
        </div>
      </div>
    </>
  )
}
