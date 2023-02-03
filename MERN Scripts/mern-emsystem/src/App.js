import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import Startpage from './pages/Startpage.js';
import Orderqty from './pages/Orderqty.js';
import Emplogin from './pages/Emplogin';
import Payment from './pages/Payment.js';
import Emp from './pages/Emp.js';
import Inventory from './pages/Inventory.js';
import OrderHistory from './pages/OrderHistory.js';
import About from './pages/About.js';
import CashConfirmation from './pages/CashConfirmation';
import ETransferConfirmation from './pages/ETransferConfirmation';
import SquareConfirmation from './pages/SquareConfirmation';
import SquarePay from './pages/SquarePay';
import SuperAdmin from './pages/SuperAdmin';
import Bootstrap from './pages/Bootstrap';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Startpage/>} />
          <Route path="order" element={<Orderqty/>} />
          <Route path="login" element={<Emplogin/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/bootstrap" element={<Bootstrap/>} />
          <Route path="order/payment" element={<Payment/>} />
          <Route path="order/payment/cashConfirmation" element={<CashConfirmation/>} />
          <Route path="order/payment/ETransferConfirmation" element={<ETransferConfirmation/>} />
          <Route path="order/payment/SquareConfirmation" element={<SquareConfirmation/>} />
          <Route path="order/payment/SquarePay" element={<SquarePay/>} />
          <Route path="login/emp" element={<Emp/>}/>
          <Route path="login/emp/inventory" element={<Inventory/>} />
          <Route path="login/emp/history" element={<OrderHistory/>} />
          <Route path="login/emp/employee" element={<SuperAdmin/>} />
        </Routes>
        
      </div>
  );
}

export default App;
