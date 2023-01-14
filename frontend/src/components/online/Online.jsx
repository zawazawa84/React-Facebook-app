import React from 'react'

export default function Online({user}) {
    console.log(user.profilePicture)
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={user.profilePicture} alt="" className='rightbarProfileImg'/>
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}
