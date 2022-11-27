import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';

import Banner from '../components/Banner.js';

import PlaceOrder from '../components/hooks/placeOrder.js';
import Progressbar from '../components/Progressbar.js';

function Orderqty(){
    return( 
        <div className="appMain">
            <div className="appHeader">
                <Banner />
            </div>
            <body className="appContainer">
                <div className="leftDiv">
                     <Logo />
                </div>
                <div className="middleDiv">
                    <h2 className="orderTitle">Enter Order Details</h2>
                    <PlaceOrder />
                 </div>
                <div className="rightDiv">
                    <Link to="/">Click here to go back</Link><br></br>
                    <Link to="payment">Click here to view Payment page</Link>
                 </div>
            </body>
            <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}

export default Orderqty;