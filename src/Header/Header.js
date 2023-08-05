import React from 'react';
import "../Header/Header.css";
import SearchIcon from '@mui/icons-material/Search';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../Images/logo.png";
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logout } from '../features/userSlice';

function Header() {
  
  const dispatch=useDispatch();


  const logoutofApp=()=>{
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>

        <div className='header__left'>
            <img src={logo} alt='kk'/>

            <div className='header__search'>
                {/* Search Icon */}
                <SearchIcon/>

                <input placeholder="Search" type='text'/>               
            </div>

        </div>

      <div className='header__right'>
           <HeaderOption Icon={HomeIcon} title="Home"/>
           <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/> 
           <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/> 
           <HeaderOption Icon={ChatIcon} title="Messaging"/>
           <HeaderOption Icon={NotificationsIcon} title="Notifications"/>   
           <HeaderOption 
           avatar={true}
           title="me"
            onClick={logoutofApp}
           /> 
      </div>
    </div>
  )
}

export default Header
