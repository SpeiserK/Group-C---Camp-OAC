import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Startpage from './pages/Startpage.js';
import Orderqty from './pages/Orderqty.js';
import Payment from './pages/Payment.js';


function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Startpage/>} />
          <Route path="order" element={<Orderqty/>} />
          <Route path="order/payment" element={<Payment/>} />
      
        </Routes>
        
      </div>
  );
}

export default App;
