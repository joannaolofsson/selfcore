import React, { useState } from 'react';
import '../App.css'
import styled from 'styled-components';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../components/MainContent';

function Home() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  return (
  <>
    <StyledGrid>
        <Header toggleSidebar={() => setIsSidebarOpened(!isSidebarOpened)} />
        <Aside isActive={isSidebarOpened} toggleAside={() => setIsSidebarOpened(false)} />
        <Dashboard />
        <Footer />
      </StyledGrid>
    </>
  )
}

export default Home;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
    'header'
    'main'
    'footer';
  height: 100vh;

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 240px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
      'header aside'
      'main aside'
      'footer aside';
  }
`;