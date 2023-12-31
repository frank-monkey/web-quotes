import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote';

function QuoteFetcher() {
  const [quotes, setQuotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchQuotes();
  }, [currentPage]);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(`https://api.quotable.io/quotes?page=${currentPage}`);
      setQuotes(response.data.results);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="quote-generator">
      <div className="quote-list">
        {quotes.map((quote, index) => (
          <Quote key={quote._id} quote={quote} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} style={{visibility: currentPage === 1 ? 'hidden' : 'visible'}}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default QuoteFetcher;
