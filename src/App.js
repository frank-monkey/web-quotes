import React, { useState } from 'react';
import './App.css';
import QuoteFetcher from './components/QuoteFetcher';
import FavoriteQuotes from './components/FavoriteQuotes';

function App() {
  const [currentQuote, setCurrentQuote] = useState({ content: '', author: '' });

  const handleNewQuote = (content, author) => {
    setCurrentQuote({ content, author });
  };

  return (
    <div className="App">
      <QuoteFetcher onNewQuote={handleNewQuote} />
      <FavoriteQuotes/> 
    </div>
  );
}

export default App;
