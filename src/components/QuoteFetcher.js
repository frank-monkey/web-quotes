import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteFetcher({ onNewQuote }) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
      onNewQuote(response.data.content, response.data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div className="quote-generator">
      <h1>Random Quote Generator</h1>
      <p>"{quote}"</p>
      <p>- {author}</p>
      <button onClick={fetchQuote}>Generate New Quote</button>
    </div>
  );
}

export default QuoteFetcher;
