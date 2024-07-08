import React from 'react'
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";
import { PiPuzzlePieceDuotone } from "react-icons/pi";



export const chipslist = [
  {
    id: 1,
    title: 'Challenge',
    linkto: './Challenge',
    icon: <PiPuzzlePieceDuotone size={20}/>,
    backgroundColor: '#4b6cb7',
    color: 'white'
  },
  {
    id: 2,
    title: 'Setup',
    linkto: './Setup',
    icon: <PiPuzzlePieceDuotone size={20}/>,
    backgroundColor: '#F48FB1',
    color: 'black'
  },
  {
    id: 3,
    title: 'Execute',
    linkto: './Execute',
    icon: <PiPuzzlePieceDuotone size={20}/>,
    backgroundColor: '#E0E0E0',
    color: 'black'
  }
];


function Chips() {
  return (
    <StyledChipwrapper>
    {chipslist.map(chip => (
      <StyledChip key={chip.id} style={{ backgroundColor: chip.backgroundColor, color: chip.color }}>
        {chip.icon} <StyledLink to={chip.linkto}>{chip.title}</StyledLink>
      </StyledChip>
    ))}
  </StyledChipwrapper>
)
};
export default Chips;

export const StyledChipwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 3em 0 1em 0;
`;

export const StyledChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #2d416e;
  border-radius: 0.5rem;
  padding: .5em;
  margin: 0 0.2rem;

`;

export const StyledLink = styled.a`
  text-decoration: none;
  padding-left: 0.3rem; 
  color: inherit;
  font-size: 1.125em;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`;
