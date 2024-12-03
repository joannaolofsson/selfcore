import React from 'react'

import { PiPuzzlePieceDuotone } from "react-icons/pi";
import '../index.css'
import '../App.css'



export const chipslist = [
  {
    id: 1,
    title: 'Tech',
    linkto: './Tech',
    icon: <PiPuzzlePieceDuotone size={20}/>,
    backgroundColor: '#4b6cb7',
    color: 'white'
  },
  {
    id: 2,
    title: 'Mental',
    linkto: './Setup',
    icon: <PiPuzzlePieceDuotone size={20}/>,
    backgroundColor: '#F48FB1',
    color: 'black'
  },
  {
    id: 3,
    title: 'Routine',
    linkto: './Execute',
    icon: <PiPuzzlePieceDuotone size={20}/>,
    backgroundColor: '#E0E0E0',
    color: 'black'
  }
];


function Chips() {
  return (
    <section className='chip-wrapper'>
    {chipslist.map(chip => (
      <div className='chip' key={chip.id} style={{ backgroundColor: chip.backgroundColor, color: chip.color }}>
        {chip.icon} <Link to={chip.linkto}>{chip.title}</Link>
      </div>
    ))}
  </section>
)
};
export default Chips;
