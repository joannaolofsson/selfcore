import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Aside from './Aside';
import Dashboard from './Dashboard';
import Header from './Header';

const MainLayout = () => {
  const [isAsideActive, setIsAsideActive] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });

  const toggleAside = () => {
    setIsAsideActive(!isAsideActive);
  };

  return (
    <StyledContainer>
      <Header />
      {isDesktopOrLaptop && <Aside isActive={isAsideActive} toggleAside={toggleAside} />}
      <Dashboard isAsideActive={isAsideActive} />
    </StyledContainer>
  );
};

export default MainLayout;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
