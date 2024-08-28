import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledH1, StyledP, StyledH3, StyledHeadingwrapper } from '../Styles';
import summerImg from '../assets/summer.jpg';
import { Link } from 'react-router-dom';


const subjects = ['Habits', 'Daily routines', 'Positive psychology', 'New apps', 'Strong mind'];

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
          <StyledHeadingwrapper>
          <StyledH1>Struggling to get your life to work for you?</StyledH1>
          </StyledHeadingwrapper>
          <StyledP>Create your Lifebase, with your favorite tech and mental tools</StyledP>
        </StyledCard>
        
        <StyledCard>
          <Link to="Quote">
        <StyledContent>
          <StyledHeadingwrapper>
          {/*Create an array of inspiring quotes to choose from*/}
          <StyledH3>You got this</StyledH3>
          </StyledHeadingwrapper><StyledHeadingwrapper>
          <StyledP>Click here to choose your favorite quote</StyledP>
          </StyledHeadingwrapper>
            </StyledContent> 
            </Link> 
        </StyledCard>

        <StyledCard>
          <Link to="Tech">
        <StyledHeadingwrapper>
          <StyledH3>Your tech</StyledH3>
          </StyledHeadingwrapper>
          <StyledP>Maybe you want to call it routines, habits or foundation</StyledP>
          </Link>
        </StyledCard>

        <StyledCard>
          <Link to="Mind">
        <StyledHeadingwrapper>
          <StyledH3>Your tools</StyledH3>
          </StyledHeadingwrapper>
          <StyledP>Here you choose the apps, websites and tech stuff that supports your life</StyledP>
          </Link>
        </StyledCard>

        <StyledCard>
          <Link to ="Foundation">
        <StyledHeadingwrapper>
          <StyledH3>Your foundation</StyledH3>
          </StyledHeadingwrapper>
          <StyledP>What kind of tools can you trust to build your Lifebase.</StyledP>
          </Link>
        </StyledCard>

        <StyledCard>
        <StyledHeadingwrapper>
          <StyledH3>Time for creation</StyledH3>
          </StyledHeadingwrapper>
          <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem debitis non cupiditate sunt in doloremque nobis sequi, maiores ipsum? Temporibus modi incidunt et deleniti fugit quibusdam assumenda ducimus eos harum?</StyledP>
        </StyledCard>
        
        <StyledCard>
        <StyledHeadingwrapper>
        <StyledImg src={summerImg} alt="image fitness "/>
          <StyledH3>What do you need to make it?</StyledH3>
          </StyledHeadingwrapper>
          <StyledP>All the things you have tried, is behind you...</StyledP>
         
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
  gap: 2rem;

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
    grid-area: 1 / 1 / 2 / 3;
  }
}

&:nth-child(2) {
  grid-area: 2 / 1 / 3 / 2;
  padding: 2em;

  @media only screen and (min-width: 600px) {
    grid-area: 2 / 1 / 3 / 2;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    grid-area: 1 / 3 / 2 / 4;
  }
}

&:nth-child(3) {
  grid-area: 3 / 1 / 4 / 2;
  padding: 2em;

  @media only screen and (min-width: 600px) {
    grid-area: 3 / 1 / 4 / 2;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    grid-area: 2 / 1 / 3 / 2;
  }
}

&:nth-child(4) {
  grid-area: 4 / 1 / 5 / 2;
  padding: 2em;

  @media only screen and (min-width: 600px) {
    grid-area: 4 / 1 / 5 / 2;
  }

  
  @media only screen and (min-width: 768px) {
    grid-area: 2 / 2 / 3 / 3;
  }
}


&:nth-child(5) {
  grid-area: 5 / 1 / 6 / 2;
  padding: 2em;

  @media only screen and (min-width: 600px) {
    grid-area: 5 / 1 / 6 / 2;
  }

  
  @media only screen and (min-width: 768px) {
    grid-area: 2 / 3 / 3 / 4;
  }
}

&:nth-child(6) {
  grid-area: 6 / 1 / 7 / 2;
  padding: 2em;

  @media only screen and (min-width: 600px) {
    grid-area: 6 / 1 / 7 / 2;
  }

  
  @media only screen and (min-width: 768px) {
    grid-area: 3 / 1 / 4 / 3;
  }
}

&:nth-child(7) {
  grid-area: 7 / 1 / 8 / 2;
  padding: 2em;

  @media only screen and (min-width: 600px) {
    grid-area: 7 / 1 / 8 / 2;
  }

  @media only screen and (min-width: 768px) {
    grid-area: 3 / 3 / 4 / 4;
  }
}

&:nth-child(8) {
  grid-area: 8 / 1 / 9 / 2;
  padding: 2em;

  @media only screen and (min-width: 600px) {
    grid-area: 8 / 1 / 9 / 2;
  }

  @media only screen and (min-width: 768px) {
    grid-area: 4 / 1 / 5 / 4;
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