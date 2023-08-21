import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Home';
import Anime from './pages/Anime';
import Character from './pages/Character';
import Genres from './pages/Genres';
import Footer from './components/Footer';
import Upcoming from './pages/Upcoming';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/anime/' element={<Anime />}/>
          <Route path='/anime/:id' element={<Anime  />}/>
          <Route path='/character/:id' element={<Character  />}/>
          <Route path='/genres' element={<Genres />} />
          <Route path='/upcoming' element={<Upcoming />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
