import { Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import Home from './pages/Home';
import Creation from './pages/Creation';
import Foundation from './pages/Foundation';
import Mind from './pages/Mind';
import Tech from './pages/Tech';
import Setup from './pages/Setup';
import Quote from './pages/Quote';


function App() {


  return (
    <>
      <Routes>
        <Route path="/Quote" element={<Quote/>} />   
        <Route path="/Setup" element={<Setup/>} />   
        <Route path="/Tech" element={<Tech/>} />
        <Route path="/Creation" element={<Creation />} />
        <Route path="/Foundation" element={<Foundation />} />
        <Route path="/Mind" element={<Mind />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
