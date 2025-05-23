import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Shop from './pages/Shop';
import Ambassadors from './pages/Ambassadors';
import Distributors from './pages/Distributors';  
// import FindFullReady from './pages/FindFullReady';
// import ExploreMore from './pages/ExploreMore';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route index path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/find-full-ready" element={<FindFullReady />} />
        <Route path="/explore-more" element={<ExploreMore />} /> */}
        <Route path="/ambassadors" element={<Ambassadors />} />
        <Route path="/distributors" element={<Distributors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
