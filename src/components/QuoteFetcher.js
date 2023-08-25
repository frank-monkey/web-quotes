import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteFetcher() {
  const [quotes, setQuotes] = useState([]);
  const quotesPerPage = 5; // Change this to the desired number of quotes per page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchQuotes();
  }, [currentPage]);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(`https://api.quotable.io/quotes?count=${quotesPerPage}&page=${currentPage}`);
      setQuotes(response.data.results);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="quote-generator">
      <h1>Random Quote Generator</h1>
      <div className="quote-list">
        {quotes.map((quote, index) => (
          <div key={index} className="quote">
            <p>"{quote.content}"</p>
            <p>- {quote.author}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default QuoteFetcher;
