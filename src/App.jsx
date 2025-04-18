import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import FindMentor from "./pages/FindMentor.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import ProductivityHub from "./pages/ProductivityHub.jsx";
import NotFound from './pages/NotFound.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-mentor" element={<FindMentor />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/productivity-hub" element={<ProductivityHub />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 