import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteFetcher from '../components/QuoteFetcher';
import '../App.css';
import githubImg from '../assets/GitHub-Mark.png'

const Home = () => {
  const [setCurrentQuote] = useState({ content: '', author: '' });

  const handleNewQuote = (content, author) => {
    setCurrentQuote({ content, author });
  };

  return (
    <div className="home-container">
      <h2 className="page-title">Web Quotes</h2>
      <div className="navigation-links">
        <Link to="/favorites" className="fancy-button">View Favorites</Link>

        <a href="https://github.com/frank-monkey/web-quotes" className="github-button">
        <img src={githubImg} alt="GitHub" width="50" />
        </a>

        <Link to="/search" className="fancy-button">Search Quotes</Link>
      </div>
      <div className="quote-generator">
        <QuoteFetcher onNewQuote={handleNewQuote} />
      </div>

    </div>
  );
};

export default Home;
