import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Startpage from './pages/Startpage.js';
import Orderqty from './pages/Orderqty.js';
import Location from './pages/Location.js';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Startpage/>} />
          <Route path="order" element={<Orderqty/>} />
          <Route path="location" element={<Location/>} />

        </Routes>
        
      </div>
  );
}

export default App;
