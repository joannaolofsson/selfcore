import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledH1, StyledP, StyledH3 } from '../Styles';
import Chips from './Chips';
import { PiSmileyStickerThin, PiPuzzlePieceThin } from "react-icons/pi";



const subjects = ['Technology', 'Lifestyle', 'Nutrition', 'Fitness'];

const Dashboard = ({ isAsideActive }) => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubjectChange = (subject) => {
    setSelectedSubjects((prevSubjects) => {
      if (prevSubjects.includes(subject)) {
        return prevSubjects.filter((s) => s !== subject);
      } else {
        return [...prevSubjects, subject];
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedSubjects.length === 0) {
        setFeedData([]);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const results = await Promise.all(
          selectedSubjects.map(async (subject) => {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(subject)}&language=en&apiKey=d84eaa6524d947bba69a9d7c720862f2`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.articles;
          })
        );
        setFeedData(results.flat());
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedSubjects]);

  return (
    <StyledMain isAsideActive={isAsideActive}>
      <StyledCardWrapper>
        <StyledCard>
          <StyledH1>What do you want to change in your life this fall?</StyledH1>
          
          <Chips />
        </StyledCard>
        <StyledCard>
        <PiSmileyStickerThin size={60}/>
          <StyledH3>You got this!!!</StyledH3>
          
          <StyledP>Test</StyledP>
        </StyledCard>
        <StyledCard>
          <StyledH3>What is Lifebase?</StyledH3>
          <StyledP>Lifebase is a webpage about creating a base for your life with the help of tech</StyledP>
        </StyledCard>
        <StyledCard>
        <PiPuzzlePieceThin size={60}/>
          <StyledH3>Choosing your areas of change</StyledH3>
          <StyledP>Test</StyledP>
        </StyledCard>
        <StyledCard>
          <StyledH3>About me</StyledH3>
          <StyledP>Test</StyledP>
        </StyledCard>
        <StyledCard>
          <StyledSubjectSelection>
            <StyledH3>Select Subjects</StyledH3>
            {subjects.map((subject) => (
              <label key={subject}>
                <input
                  type="checkbox"
                  onChange={() => handleSubjectChange(subject)}
                  checked={selectedSubjects.includes(subject)}
                />
                {subject}
              </label>
            ))}
          </StyledSubjectSelection>
          <StyledFeed>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {feedData.slice(0, 5).map((item, index) => (
              <div key={index}>
                <StyledH3>{item.title}</StyledH3>
                <StyledP>{item.description}</StyledP>
                <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            ))}
          </StyledFeed>
        </StyledCard>
      </StyledCardWrapper>
    </StyledMain>
  );
};

export default Dashboard;
     
const StyledMain = styled.div`
  width: 100vw;
  grid-area: main;
`;




const StyledCardWrapper = styled.div`
  margin: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`;

const StyledCard = styled.div`
    border: 1px solid #2d416e;
    background-color: #2d416e;
    border-radius: 4px;
    color: #F48FB1;
    padding: 1.5em;
    border-radius: 1em;

    
&:first-child {
  grid-area: 1 / 1 / 2 / 2;
  background-color: transparent;
  border: none;
  padding: 0;

  @media only screen and (min-width: 600px) {
    grid-area: 1 / 1 / 2 / 4;
  }
}

&:nth-child(2) {
  grid-area: 2 / 1 / 3 / 2;

  @media only screen and (min-width: 600px) {
    grid-area: 1 / 4/ 2 / 5;
  }
}

&:nth-child(3) {
  grid-area: 3 / 1 / 4 / 2;

  @media only screen and (min-width: 600px) {
    grid-area: 2 / 1 / 4 / 3;
  }
}

&:nth-child(4) {
  grid-area: 4 / 1 / 5 / 2;

  @media only screen and (min-width: 600px) {
    grid-area: 2 / 3 / 3 / 5;
  }
}

  &:nth-child(5) {
  grid-area: 5 / 1 / 6 / 2;

  @media only screen and (min-width: 600px) {
    grid-area: 3 / 3 / 4 / 5;
  }
}

&:nth-child(6) {
  grid-area: 6 / 1 / 7 / 2;

  @media only screen and (min-width: 600px) {
    grid-area: 4 / 1 / 5 / 5;
  }
}
`;
const StyledSubjectSelection = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.125em;

    input {
      margin-right: 0.5rem;
    }
  }
`;

const StyledFeed = styled.div`
  overflow-y: auto;

  div {
    margin-bottom: 1rem;

    h3 {
      margin: 0 0 0.5rem 0;
    }

    p {
      margin: 0;
    }

    a {
      color: #1e90ff;
      text-decoration: none;
    }
  }
`;