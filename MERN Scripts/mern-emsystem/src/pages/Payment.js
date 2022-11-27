import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import Progressbar from '../components/Progressbar.js';
import axios from 'axios';

//import PlaceOrder from '..components/hooks/placeOrder.js';


function Payment(){
const navigate = useNavigate();

function handleClick() {
    //maybe put this in a functions.js file somewhere and import it, for readability
    const newOrder = {
        Name: localStorage.getItem("email"),
        Quantity: localStorage.getItem("quantity"),
        Location: localStorage.getItem("location")
    }
    axios.post('http://localhost:5000/send', newOrder);
}

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
                        <h2 className="orderTitle">Select Payment Type</h2>
                        <PaymentSummary />
                        <div className="buttonBox">
                            <button className="buttonStyle" onClick={handleClick}>Pay with Square</button>
                            <button className="buttonStyle" onClick={() => navigate("CashConfirmation")}> Pay with Cash </button>
                            <button className="buttonStyle" onClick={() => navigate("ETransferConfirmation")}> Pay with e-transfer </button>
                        </div>
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