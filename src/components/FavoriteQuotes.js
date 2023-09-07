import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Quote from './Quote';

function FavoriteQuotes() {
  const [starredQuotes, setStarredQuotes] = useState([]);
  const [quoteDetails, setQuoteDetails] = useState([]);

  useEffect(() => {
    const fetchStarredQuotes = JSON.parse(localStorage.getItem('starredQuotes')) || [];
    const fetchQuoteDetails = async () => {
      const details = await Promise.all(
        fetchStarredQuotes.map(async (quoteId) => {
          try {
            const response = await axios.get(`https://api.quotable.io/quotes/${quoteId}`);
            return response.data;
          } catch (error) {
            console.error(`Error fetching quote with ID ${quoteId}:`, error);
            return null;
          }
        })
      );
      setQuoteDetails(details);
    };

    setStarredQuotes(fetchStarredQuotes);
    fetchQuoteDetails();
  }, []);

  return (
    <div className="quote-generator">
      <h2>Favorite Quotes</h2>
      <div className="quote-list">
        {quoteDetails.map((quote, index) => (
          <Quote key={quote._id} quote={quote} />
        ))}
      </div>
    </div>
  );
}

export default FavoriteQuotes;