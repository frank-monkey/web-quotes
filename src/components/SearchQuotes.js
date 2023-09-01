import React, { useState } from 'react';
import axios from 'axios';
import StarButton from './StarButton'; // Import the StarButton component

const SearchQuotes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quotes, setQuotes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.quotable.io/search/quotes?query=${searchTerm}`);
      setQuotes(response.data.results);
    } catch (error) {
      console.error('Error searching quotes:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="quote-list">
        {quotes.map((quote) => (
          <div key={quote._id} className="quote">
            <p className="quote-content">"{quote.content}"</p>
            <div className="button-and-author">
              <StarButton quoteId={quote._id} />
              <p className="quote-author">- {quote.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchQuotes;
