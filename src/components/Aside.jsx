import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBlog } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RxAlignBaseline } from "react-icons/rx";
import xIconImg from '../assets/x-letter.png';
import '../App.css'



const Aside = ({ isActive, toggleAside }) => {
   
  return (
    <section className='aside-container' $isActive={isActive}>
      <img className='close-img' onClick={toggleAside} src={xIconImg} alt="close Icon" />
        <div className='icon-bar'> 
          <ul className='ul-bar'>
            <li className='li-bar'><Link to="/"><BsFillPersonLinesFill size={24}/></Link></li>
            <li className='li-bar'><Link to="/"><FaBlog size={24}/></Link></li>
            <li className='li-bar'><Link to="/"><RxAlignBaseline size={24}/></Link></li>
          </ul>
        </div>

        <article className='aside-feed'> 
          <ul className='topic-list'>
            <li className='list-item'>
                <h3>Select your areas</h3>
                <p>Pick 1-3 areas</p>
            </li>
            <li className='list-item'>
                <h3>Pick your challenge</h3>
                <p>For how long?</p>
            </li>
            <li className='list-item'>
                <h3>How can we help you?</h3>
                <p>Tell us how we can support you</p>
            </li>
          </ul>
        </article>
    </section>
  );
};

export default Aside;
