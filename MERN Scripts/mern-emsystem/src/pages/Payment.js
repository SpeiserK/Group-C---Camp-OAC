import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import Progressbar from '../components/Progressbar.js';

function Payment(){
const navigate = useNavigate();
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
                        <PaymentSummary />
                        <button><a href="https://squareup.com/ca/en">Pay with Square</a> </button>
                        <button onClick={() => navigate("CashConfirmation")}> Pay with Cash </button>
                        <button onClick={() => navigate("ETransferConfirmation")}> Pay with e-transfer </button>
                    </div>
                    <div className="rightDiv">
                        <Link onClick={() => navigate(-1)}>Click here to go back</Link><br></br>
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

export default Payment;