import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing Pages
import Home from './pages/home';
import Navbar from './components/navBar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
