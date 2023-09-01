import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Favorites from './pages/Favorites';
import Search from './pages/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;