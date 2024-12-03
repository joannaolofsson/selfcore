import React from 'react';
import { PiUserCircleGearDuotone } from "react-icons/pi";
import '../index.css'
import '../App.css'


function Header({ toggleSidebar }) {
  return (
    <header>
      <div className='header_search'><h2>Lifebase</h2></div>
      {/*
      <div className='header_avatar'><StyledP>Logout</StyledP></div>*/}
      <button className='menu-button' onClick={toggleSidebar}>
      <PiUserCircleGearDuotone size={40}/>
      </button>
    </header>
  );
}

export default Header;


