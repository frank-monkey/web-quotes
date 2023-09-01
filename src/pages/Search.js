import { Link } from 'react-router-dom';
import SearchQuotes from '../components/SearchQuotes';

const Search = () => {
  return (
    <div>
      <Link to="/">Go Home</Link>
      <SearchQuotes/>
    </div>
  );
};

export default Search;