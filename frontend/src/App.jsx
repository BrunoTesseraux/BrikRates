import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss'
import { useState } from 'react';
import Sidebar from './assets/components/Sidebar/Sidebar';
import SignIn from './assets/components/SignIn/SignIn';
import FAQ from './assets/components/FAQ/FAQ';
import LineChart from './assets/components/LineChart/LineChart';
import { DarkModeProvider } from './assets/DarkModeContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  

  return (
    <Router>
      <DarkModeProvider>
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
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/" element={<LineChart />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              )}
              </Routes>
            </div>
        </div>
      </DarkModeProvider>
    </Router>
  )
}

export default App