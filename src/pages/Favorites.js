import { Link } from 'react-router-dom';
import FavoriteQuotes from '../components/FavoriteQuotes'

const Favorites = () => {
  return (
    <div>
      <Link to="/">Go Home</Link>
      <FavoriteQuotes></FavoriteQuotes>
    </div>
  );
};

export default Favorites;