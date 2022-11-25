import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import Progressbar from '../components/Progressbar.js';


//import PlaceOrder from '..components/hooks/placeOrder.js';

function ETransferConfirmation(){
const navigate = useNavigate();
    return(
            <div className="main">
                <Banner />
                <p> Please send $$$$ to OGOPOGOEMAIL@ROTARYCLUB.COM, When we confirm your payment your order will be approved, please check your email. </p>
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

export default ETransferConfirmation;