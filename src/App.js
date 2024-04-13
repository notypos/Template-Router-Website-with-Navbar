import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import Users from './components/users';
import Navbar from './Navbar';

function App() {
  return (
    <div className="whole-page">
      <div className="app">
      <Routes>
      <Route path = "/" element= {<Navbar />}> 
      <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/users" element={<Users />} />
    <Route path="/contact" element={<h1>Contact Us</h1>} />
    </Route>
      </Routes>
      </div>
      </div>
  );
}

export default App;
