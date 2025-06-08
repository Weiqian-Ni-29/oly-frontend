import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from '../src/pages/en/Main';
import MainZH from '../src/pages/zh/MainZH';
import AboutUs from './pages/en/AboutUs';
import AboutUsZH from './pages/zh/AboutUsZH';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace/>}/>
          <Route path="/en" element={<Main />} />
          <Route path='/zh' element={<MainZH/>} />
          <Route path='/AboutUs/en' element={<AboutUs/>}/>
          <Route path='/AboutUS/zh' element={<AboutUsZH/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
