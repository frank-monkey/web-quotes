import { Link } from 'react-router-dom';
import FavoriteQuotes from '../components/FavoriteQuotes'
import '../App.css';

const Favorites = () => {
  return (
    <div>
      <Link className="fancy-button" to="/">Go Home</Link>
      <FavoriteQuotes></FavoriteQuotes>
    </div>
  );
};

export default Favorites;