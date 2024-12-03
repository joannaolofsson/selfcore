import React, { useState, useEffect } from 'react';
import summerImg from '../assets/summer.jpg';
import { Link } from 'react-router-dom';
import '../App.css'
import '../index.css'

const Dashboard = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const subjects = ['Habits', 'Daily routines', 'Positive psychology', 'New apps', 'Strong mind'];

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
    
    <div className='container'>
      <article className='grid-container'>
        <section className='card'>
          <h1>Struggling to get your life to work for you?</h1>
          <p>Create your Lifebase, with your favorite tech and mental tools</p>
        </section>
        
        <section className='card'>
          <Link to="Quote">
          <h3>You got this</h3>
          <p>Click here to choose your favorite quote</p>
            </Link> 
        </section>

        <section className='card'>
          <Link to="Tech">
          <h3>Your tech</h3>

          <p>Maybe you want to call it routines, habits or foundation</p>
          </Link>
        </section>

        <section className='card'>
          <Link to="Mind">

          <h3>Your tools</h3>
  
          <p>Here you choose the apps, websites and tech stuff that supports your life</p>
          </Link>
        </section>

        <section className='card'>
          <Link to ="Foundation">

          <h3>Your foundation</h3>
   
          <p>What kind of tools can you trust to build your Lifebase.</p>
          </Link>
        </section>

        <section className='card'>
  
          <h3>Time for creation</h3>
  
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem debitis non cupiditate sunt in doloremque nobis sequi, maiores ipsum? Temporibus modi incidunt et deleniti fugit quibusdam assumenda ducimus eos harum?</p>
        </section>
        
        <section className='card'>
   
        <img src={summerImg} alt="image fitness" className='img-pink'/>
          <h3>What do you need to make it?</h3>
          <p>All the things you have tried, is behind you...</p>
         
        </section>
        <section className='card'>

  
            <h3>Select Subjects of interest</h3>
            <p></p>

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
          </section>
          <section className='news-feed'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {feedData.slice(0, 5).map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            ))}
          </section>
      </article>
    </div>
  );
};

export default Dashboard;
    