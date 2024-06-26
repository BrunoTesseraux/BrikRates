import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { useState } from 'react'; // Ensure React is imported correctly
import Sidebar from './assets/components/Sidebar/Sidebar';
import SignIn from './assets/components/SignIn/SignIn';
import FAQ from './assets/components/FAQ/FAQ';
import LineChart from './assets/components/LineChart/LineChart';
import { DarkModeProvider } from './assets/DarkModeContext';
import { FetchedDataProvide } from './assets/ExapleContext'; // Corrected import path
import TodayPriceTable from './assets/components/TodayPriceTable/TodayPriceTable';
import HeatmapContainer from './assets/components/Heatmap/HeatmapContainer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial state

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <FetchedDataProvide> {/* Ensure FetchedDataProvide is correctly imported and used */}
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
                    <Route path="/charts" element={<LineChart />} />
                    <Route path="/tables" element={<TodayPriceTable />} />
                    <Route path="/" element={<HeatmapContainer/>} />
                    <Route path="*" element={<Navigate to="/" />} />
                  </>
                )}
              </Routes>
            </div>
          </div>
        </DarkModeProvider>
      </FetchedDataProvide>
    </Router>
  );
}

export default App;