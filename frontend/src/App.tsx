import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss'
import { useState } from 'react';
import Sidebar from './assets/components/Sidebar/Sidebar';
import SignIn from './assets/components/SignIn/SignIn';
import FAQ from './assets/components/FAQ/FAQ';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  

  return (
    <Router>
      <div className='app-container'>
        {isLoggedIn && <Sidebar />}
          <div className='main-content'>
            <Routes>
            {!isLoggedIn ? (
              <>
                <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
                <Route path="*" element={<Navigate to="/signin" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<FAQ />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
            </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App
