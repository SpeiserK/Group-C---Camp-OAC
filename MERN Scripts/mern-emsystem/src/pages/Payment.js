import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';

//import PlaceOrder from '..components/hooks/placeOrder.js';

function Payment(){
const navigate = useNavigate();
    return(
            <div className="main">
                <Banner />
                <div className="container">
                    <Link onClick={() => navigate(-1)}>Click here to go back</Link><br></br>
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