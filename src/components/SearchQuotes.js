import React, { useState } from 'react';
import axios from 'axios';
import Quote from './Quote';

const SearchQuotes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quotes, setQuotes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.quotable.io/search/quotes?query=${searchTerm}&limit=150&fuzzyMaxEdits=1`);
      setQuotes(response.data.results);
    } catch (error) {
      console.error('Error searching quotes:', error);
    }
  };

  return (
    <div className="quote-generator">
      <h2>Search Quotes</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="quote-list">
        {quotes.map((quote) => (
          <Quote key={quote._id} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default SearchQuotes;