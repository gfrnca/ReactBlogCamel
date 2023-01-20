import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';

// Pages


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
