// General
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
  
  // Hooks 
  import { useState, useEffect } from 'react'
  import { useAuthentication } from './hooks/useAuthentication';  

// CSS
import './App.css';

// Components
import Navbar from './components/organisms/Navbar/Navbar';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

// Context 
import { AuthProvider } from './context/AuthContext';



function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth])


  const loadingUser = user === undefined

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
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
      </AuthProvider>
    </div>
  );
}

export default App;
