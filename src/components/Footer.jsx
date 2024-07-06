import React from 'react'
import '../App.css'
import styled from 'styled-components'
import { StyledP, StyledH3 } from '../Styles'

function Footer() {
  return (
    <>
    <StyledFooter>
        <div className='footer_copywrite'><StyledP>&copy;2024</StyledP></div>
        <div className='footer_byline'><StyledH3>Made with &hearts;</StyledH3></div>
    </StyledFooter>
    </>
  )
} 

export default Footer 


const StyledFooter = styled.footer`
     grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #F48FB1;
    padding: 2rem;
`;