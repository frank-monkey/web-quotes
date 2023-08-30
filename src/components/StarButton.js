import React, { useState, useEffect } from 'react';

function StarButton({ quoteId }) {
  const [isStarred, setIsStarred] = useState(false);

  useEffect(() => {
    const starredQuotes = JSON.parse(localStorage.getItem('starredQuotes')) || [];
    setIsStarred(starredQuotes.includes(quoteId));
  }, [quoteId]);

  const handleStarClick = () => {
    const starredQuotes = JSON.parse(localStorage.getItem('starredQuotes')) || [];

    if (isStarred) {
      const updatedStarredQuotes = starredQuotes.filter(id => id !== quoteId);
      localStorage.setItem('starredQuotes', JSON.stringify(updatedStarredQuotes));
    } else {
      const updatedStarredQuotes = [...starredQuotes, quoteId];
      localStorage.setItem('starredQuotes', JSON.stringify(updatedStarredQuotes));
    }

    setIsStarred(!isStarred);
  };

  return (
    <button onClick={handleStarClick}>
      {isStarred ? 'Unstar' : 'Star'}
    </button>
  );
}

export default StarButton;