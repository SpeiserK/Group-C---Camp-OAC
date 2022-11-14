import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
//import PlaceOrder from '..components/hooks/placeOrder.js';

function Payment(){
    return(
            <div className="main">
                <div className="App">
                    <header className="App-header">
                    <h1>Camp OAC</h1>
                    <Logo />
                    </header>
                </div>
                <div className="container">
                    <Link to="order">Click here to go back</Link><br></br>
                </div>
                <div className="footer">
                    <footer className="App-footer">
                        <Navbar />
                    </footer>
                </div>
            </div>
    );
}

export default Payment;