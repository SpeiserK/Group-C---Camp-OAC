import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Startpage from './pages/Startpage.js';
import Orderqty from './pages/Orderqty.js';
import Emplogin from './pages/Emplogin';
import Payment from './pages/Payment.js';
import Emp from './pages/Emp.js';
import ViewOrders from './pages/ViewOrders.js';
import Inventory from './pages/Inventory.js';
import OrderHistory from './pages/OrderHistory.js';
import CashConfirmation from './pages/CashConfirmation';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Startpage/>} />
          <Route path="order" element={<Orderqty/>} />
          <Route path="login" element={<Emplogin/>} />
          <Route path="order/payment" element={<Payment/>} />
          <Route path="order/payment/cashConfirmation" element={<CashConfirmation/>} />
          <Route path="login/emp" element={<Emp/>}/>
          <Route path="login/emp/viewOrders" element={<ViewOrders/>} />
          <Route path="login/emp/inventory" element={<Inventory/>} />
          <Route path="login/emp/history" element={<OrderHistory/>} />
        </Routes>
        
      </div>
  );
}

export default App;
