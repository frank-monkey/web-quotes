import React from 'react';

function FavoriteQuotes() {
  const starredQuotes = JSON.parse(localStorage.getItem('starredQuotes')) || [];

  return (
    <div>
      <h2>Favorite Quotes</h2>
      <ul>
        {starredQuotes.map(quoteId => (
          <li key={quoteId}>{`Quote ${quoteId}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteQuotes;
