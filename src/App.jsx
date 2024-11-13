import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Shop from './pages/Shop';
import FindFullReady from './pages/FindFullReady';
import ExploreMore from './pages/ExploreMore';
import Ambassadors from './pages/Ambassadors';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/find-full-ready" element={<FindFullReady />} />
        <Route path="/explore-more" element={<ExploreMore />} />
        <Route path="/ambassadors" element={<Ambassadors />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
