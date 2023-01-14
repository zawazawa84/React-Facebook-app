import React from 'react'

export default function ClossFriend({user}) {
    console.log(user.profilePicture)
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className='sidebarFriendImg'/>
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
