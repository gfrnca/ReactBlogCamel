// General
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// CSS
import './App.css';

// Components
import Navbar from './components/organisms/Navbar/Navbar';
import About from './pages/About/About';

// Pages
import Home from './pages/Home/Home';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
