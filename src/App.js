// General
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// CSS
import './App.css';

// Components
import Navbar from './components/organisms/Navbar/Navbar';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
