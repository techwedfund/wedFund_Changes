import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {
  Route,
  BrowserRouter as Router,
  Routes,
}from 'react-router-dom';
import How from './Component/How';
import About from './Component/About'
import Career from './Component/Career';
import { AlertProvider } from './Context/AlertContext';
import { useRef } from 'react';

function App() {
  const inputRefName = useRef(null);
  return (
    <>
    <Router>
    <AlertProvider>
    <Navbar inputRefName={inputRefName}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<How />} />
      <Route path="/careers" element={<Career />} />
    </Routes>
    </AlertProvider>
    </Router>
    </>
  );
}

export default App;
