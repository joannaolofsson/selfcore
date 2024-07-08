import React from 'react';
import styled from 'styled-components';
import { StyledH2, StyledP } from '../Styles'
import { PiUserCircleGearDuotone } from "react-icons/pi";


function Header({ toggleSidebar }) {
  return (
    <StyledHeader>
      <div className='header_search'><StyledH2>Lifebase</StyledH2></div>
      {/*
      <div className='header_avatar'><StyledP>Logout</StyledP></div>*/}
      <StyledMenuButton onClick={toggleSidebar}>
      <PiUserCircleGearDuotone size={40}/>
      </StyledMenuButton>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  grid-area: 'header';
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  
  @media only screen and (min-width: 600px) {
    padding: 2rem;
  }
`;


const StyledMenuButton = styled.button`
  display: none;

  @media only screen and (min-width: 600px) {
    background-color: #F48FB1;
    position: fixed;
    display: flex;
    top: 1em;
    right: 1em;
    align-items: center;
    z-index: 1;
    cursor: pointer;
    padding: 1rem;
    font-size: 20px;
    border-radius: 1rem;
  }
`;

/* Förändringar 

Ta bort hamburermenyn, menyn skall åka ut automatiskt. 

*/


