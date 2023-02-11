import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Search from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ClossFriend from '../clossFriend/ClossFriend';
import "./Sidebar.css"
import { Users } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeIcon className='sidebarIcon'/>
            <Link to="/" style={{textDecoration:"none", color:"black"}}>
              <span className="sidebarListItemText">ホーム</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Search className='sidebarIcon'/>
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className='sidebarIcon'/>
            <span className="sidebarListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            <MessageIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">メッセージ</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">ブックマーク</span>
          </li>
          <li className="sidebarListItem">
            <PersonIcon className='sidebarIcon'/>
            <Link to="/profile/Aizawa" style={{textDecoration:"none", color:"black"}}>
              <span className="sidebarListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <SettingsIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">設定</span>
          </li>
        </ul>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
            {Users.map((user)=>(
                <ClossFriend user={user} key={user.id}/>
            ))}
        </ul>
      </div>
    </div>
  )
}
