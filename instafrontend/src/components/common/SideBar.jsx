import React from 'react'
import "../../styles/sidebar.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TryIcon from '@mui/icons-material/Try';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const SideBar = () => {
    return (
        <div className='sidebarContainer'>
            <ul>                
                <li style={{marginTop:"20px"}}><img width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRS_CzwEo1bBzCZzBh3XQSNLHtHBRWveN-QA&usqp=CAU"/></li>
                <span style={{marginBottom:"20px"}}><InstagramIcon/></span>

                <li>Home</li>
                <span><HomeIcon/></span>
                <li>Search</li>
                <span><SearchIcon/></span>
                <li>Explore</li>
                <span><ExploreIcon/></span>
                <li>Reels</li>
                <span><VideoLibraryIcon/></span>
                <li>Messages</li>
                <span><TryIcon/></span>
                <li>Notifications</li>
                <span><NotificationAddIcon/></span>
                <li>Create</li>
                <span><AddCircleOutlineIcon/></span>
                <li>Profile</li>
                <span><AccountCircleIcon/></span>
            </ul>
        </div>
    )
}

export default SideBar