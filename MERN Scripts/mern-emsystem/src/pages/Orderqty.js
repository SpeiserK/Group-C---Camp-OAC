import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';

import Banner from '../components/Banner.js';

import PlaceOrder from '../components/hooks/placeOrder.js';

function Orderqty(){
    return( 
        <div>
            <div className="main">


            <Banner />

            <PlaceOrder />
            
            <Link to="/">Click here to go back</Link><br></br>
            <Link to="payment">Click here to view Payment page</Link>
            </div>
            <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}

export default Orderqty;