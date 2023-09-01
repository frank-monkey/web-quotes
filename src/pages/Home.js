import { Link } from 'react-router-dom';
import QuoteFetcher from '../components/QuoteFetcher';
import React, { useState } from 'react';
import '../App.css';

const Home = () => {
  const [currentQuote, setCurrentQuote] = useState({ content: '', author: '' });

  const handleNewQuote = (content, author) => {
    setCurrentQuote({ content, author });
  };

  return (
    <div>
        <Link to="/favorites">View Favorites</Link> 
        <QuoteFetcher onNewQuote={handleNewQuote}/>
    </div>
    );
};

export default Home;