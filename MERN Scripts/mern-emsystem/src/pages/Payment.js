import { Link } from "react-router-dom";
import React from 'react'
import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js';
import PlaceOrder from '..components/hooks/placeOrder.js'

function Paymentpage(){
    return(
    <div className="main">
        <div className="App">
            <header className="App-header">
            <h1>Camp OAC</h1>
            <Logo />
            </header>
        </div>
        
        <div className="footer">
            <footer className="App-footer">
                <Navbar />
            </footer>
        </div>
    </div>
    );
}

export default Paymentpage;