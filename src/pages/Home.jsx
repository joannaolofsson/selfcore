import React, { useState } from 'react';
import '../App.css'
import Dashboard from '../components/MainContent';

function Home() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  return (
  <>
    <container>
        <header toggleSidebar={() => setIsSidebarOpened(!isSidebarOpened)} />
        <aside isActive={isSidebarOpened} toggleAside={() => setIsSidebarOpened(false)} />
        <Dashboard />
        <footer />
      </container>
    </>
  )
}

export default Home;