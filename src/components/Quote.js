import React from 'react';
import StarButton from './StarButton';

const Quote = ({ quote, onStarClick }) => {
  return (
    <div className="quote">
      <p className="quote-content">"{quote.content}"</p>
      <div className="button-and-author">
        <StarButton quoteId={quote._id} onClick={() => onStarClick(quote)} />
        <p className="quote-author">- {quote.author}</p>
      </div>
    </div>
  );
};

export default Quote;
