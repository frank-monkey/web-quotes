import React, { useState } from 'react';
import './App.css';
import QuoteFetcher from './components/QuoteFetcher';

function App() {
  const [currentQuote, setCurrentQuote] = useState({ content: '', author: '' });

  const handleNewQuote = (content, author) => {
    setCurrentQuote({ content, author });
  };

  return (
    <div className="App">
      <QuoteFetcher onNewQuote={handleNewQuote} />
    </div>
  );
}

export default App;
