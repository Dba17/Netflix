import React from 'react'
import './header.css'
import NetflixLogo from '../../assets/Images/netflixlogo.svg'
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className="header_outer_container">
        <div className="header_container">
            <div className="header_left">
                <ul>
                    <li><img src={NetflixLogo} alt="Netflix logo" width="100"/></li>
                    <li>Home</li>
                    <li>TvShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>My List</li>
                    <li>Browse by Language </li>
                </ul>
            </div>
            <div className="header_right">
                <ul>
                    <li> <SearchIcon/> </li>
                    <li><CircleNotificationsIcon/> </li>
                    <li><AccountCircleIcon/> </li>
                    <li><ArrowDropDownIcon/> </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header