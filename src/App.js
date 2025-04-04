import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from '../src/pages/en/Main';
import AboutUs from './pages/en/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace/>}/>
          <Route path="/en" element={<Main />} />
          <Route path='/AboutUs/en' element={<AboutUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
