import { Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import Home from './pages/Home';
import MyBase from './pages/MyBase';
import Structure from './pages/Structure';
import Mealplanning from './pages/Mealplanning';
import Challenge from './pages/Challenge';
import Setup from './pages/Setup';
import Execute from './pages/Execute';


function App() {


  return (
    <>
      <Routes>
        <Route path="/Execute" element={<Execute/>} />   
        <Route path="/Setup" element={<Setup/>} />   
        <Route path="/Challenge" element={<Challenge/>} />
        <Route path="/MyBase" element={<MyBase />} />
        <Route path="/Structure" element={<Structure />} />
        <Route path="/Mealplanning" element={<Mealplanning />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
