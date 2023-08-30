import React from 'react'; 

function StarButton({ quoteId }) {

  const handleStarClick = () => {
    console.log(`Quote ${quoteId} marked as favorite`);
  };

  return (
    <button onClick={handleStarClick}>Star</button>
  );
}

export default StarButton;