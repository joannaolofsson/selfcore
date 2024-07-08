import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledH1, StyledP, StyledH3 } from '../Styles';
import Chips from './Chips';
import summerImg from '../assets/summer.jpg';




const subjects = ['Health app', 'New job', 'Weightloss', 'Recipes', 'Fitness app'];

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

        </StyledCard>
        <StyledCard>

        <StyledHeadingwrapper>
          <StyledH3>You got this!!!</StyledH3>
          </StyledHeadingwrapper>
          <StyledP>One day at a time and all of a sudden it's Christmas</StyledP>
        </StyledCard>
        <StyledCard>
        <StyledImg src={summerImg} alt="image fitness "/>
        <StyledContent>
          <StyledHeadingwrapper>
  
          <StyledH3>What is Lifebase?</StyledH3>
          </StyledHeadingwrapper><StyledHeadingwrapper>
          <StyledP>Lifebase is a web project about creating a base for your life with the help of tech</StyledP>
          </StyledHeadingwrapper><StyledHeadingwrapper>
          <StyledP>In this project I combine my experience in behavior therapy with my skills in design and coding, using myself as a guinny pig.</StyledP>
            </StyledHeadingwrapper>
            </StyledContent>  
        </StyledCard>
        <StyledCard>
        <StyledHeadingwrapper>
          <StyledH3>Process</StyledH3>
          </StyledHeadingwrapper>
          <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem debitis non cupiditate sunt in doloremque nobis sequi, maiores ipsum? Temporibus modi incidunt et deleniti fugit quibusdam assumenda ducimus eos harum?</StyledP>
          <Chips />
                    
  
        </StyledCard>
        <StyledCard>
          <StyledHeadingwrapper>
          <StyledH3>To make it stick</StyledH3>
          </StyledHeadingwrapper>
          <StyledP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam culpa ad corrupti! Consectetur quis, temporibus, eos possimus cumque tempora quo exercitationem inventore ducimus reiciendis fugiat! Voluptatibus similique mollitia eaque vitae.</StyledP>
        </StyledCard>
        <StyledCard>

        <StyledHeadingwrapper>
          <StyledH3>What do you need to make it?</StyledH3>
          </StyledHeadingwrapper>
          <StyledP>All the things you have tried, is behind you...</StyledP>
          <StyledP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus quisquam ducimus laudantium fuga distinctio corporis aliquam quo sunt consequatur! Tempore, repellat at? Commodi voluptatem beatae ex ducimus non numquam?</StyledP>
        </StyledCard>
        <StyledCard>
          <StyledSubjectSelection>
            <StyledHeadingwrapper>
            <StyledH3>Select Subjects of interest</StyledH3>
            <StyledP></StyledP>
            </StyledHeadingwrapper>
            {subjects.map((subject) => (
              <StyledLabel key={subject}>
                <StyledCheckbox
                  type="checkbox"
                  onChange={() => handleSubjectChange(subject)}
                  checked={selectedSubjects.includes(subject)}
                />
                {subject}
              </StyledLabel>
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
  margin: 2em;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`;

const StyledCard = styled.div`

    border: 1px solid #2d416e;
    background-color: #2d416e;
    border-radius: 4px;
    color: #F48FB1;

    border-radius: 1em;

    
&:first-child {
  grid-area: 1 / 1 / 2 / 2;
  background-color: transparent;
  border: none;
  padding: 0 0 2em 0;

  @media only screen and (min-width: 600px) {
    grid-area: 1 / 1 / 2 / 2;

  }
  @media only screen and (min-width: 768px) {
    grid-area: 1 / 1 / 2 / 4;
  }
}

&:nth-child(2) {
  grid-area: 2 / 1 / 3 / 2;
  padding: 1.5em;

  @media only screen and (min-width: 600px) {
    grid-area: 2 / 1 / 3 / 2;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    grid-area: 1 / 4 / 2 / 5;
  }
}

&:nth-child(3) {
  grid-area: 3 / 1 / 4 / 2;


  @media only screen and (min-width: 600px) {
    grid-area: 3 / 1 / 4 / 2;
  }

  @media only screen and (min-width: 768px) {
    grid-area: 2 / 1 / 4 / 2;
  }
}

&:nth-child(4) {
  grid-area: 4 / 1 / 5 / 2;
  padding: 1.5em;

  @media only screen and (min-width: 600px) {
    grid-area: 4 / 1 / 5 / 2;
  }

  
  @media only screen and (min-width: 768px) {
    grid-area: 2 / 2 / 3 / 5;
  }
}

  &:nth-child(5) {
  grid-area: 5 / 1 / 6 / 2;
  padding: 1.5em;

  @media only screen and (min-width: 600px) {
    grid-area: 5 / 1 / 6 / 2;
  }

  @media only screen and (min-width: 768px) {
    grid-area: 3 / 2 / 4 / 3;
  }
}

&:nth-child(6) {
  grid-area: 6 / 1 / 7 / 2;
  padding: 1.5em;

  @media only screen and (min-width: 600px) {
    grid-area: 6 / 1 / 7 / 2;
  }

  @media only screen and (min-width: 768px) {
    grid-area: 3 / 3 / 4 / 5;
  }
}

&:nth-child(7) {
  grid-area: 6 / 1 / 7 / 2;
  padding: 1.5em;

  @media only screen and (min-width: 600px) {
    grid-area: 6 / 1 / 7 / 2;
  }

  @media only screen and (min-width: 768px) {
    grid-area: 4 / 1 / 5 / 5;
  }
}
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 1em 1em 0 0;
`;

const StyledContent = styled.div`
  padding: 1.5em;
`

const StyledHeadingwrapper = styled.div`
  padding: 1em 0;
`;
const StyledSubjectSelection = styled.div`
  padding: 1em 0;
  border-bottom: 1px solid white;
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.5em;
    font-size: 1.25em;
    cursor: pointer;
    color: white;

`;

const StyledCheckbox = styled.input`
  margin-right: 1em;
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: black; // Change the color to your preference

  &:checked {
    background-color: black;
  }
`;

const StyledFeed = styled.div`
  overflow-y: auto;

  div {
    margin: 2em 0;

    h3 {
      margin: 0 0 1em 0;
    }

    p {
      margin: 0 0 1em 0;
      line-height: 1.5em;
    }

    a {
      color: white;
      text-decoration: none;

    }
  }
`;