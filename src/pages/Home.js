import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteFetcher from '../components/QuoteFetcher';
import '../App.css';
import './Home.css'; // Import a separate CSS file for component-specific styles

const Home = () => {
  const [currentQuote, setCurrentQuote] = useState({ content: '', author: '' });

  const handleNewQuote = (content, author) => {
    setCurrentQuote({ content, author });
  };

  return (
    <div className="home-container">
      <h2 className="page-title">Web Quotes</h2>
      <div className="navigation-links">
        <Link to="/favorites" className="fancy-button">View Favorites</Link>
        <Link to="/search" className="fancy-button">Search Quotes</Link>
      </div>
      <div className="quote-generator">
        <QuoteFetcher onNewQuote={handleNewQuote} />
      </div>

    </div>
  );
};

export default Home;
