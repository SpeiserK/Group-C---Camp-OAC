import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import OurProgBar from '../components/OurProgBar.js';
import axios from 'axios';
import CampLogo from '../components/CampLogo.js';

//import PlaceOrder from '..components/hooks/placeOrder.js';


function Payment(){
const navigate = useNavigate();

function post2DB(type) {
    //maybe put this in a functions.js file somewhere and import it, for readability
    const newOrder = {
        Name: localStorage.getItem("email"),
        Quantity: localStorage.getItem("quantity"),
        Location: localStorage.getItem("location"),
        Payment: type,
        phoneNumber: localStorage.getItem("phoneNumber")
    }
    axios.post('http://localhost:5001/send', newOrder);
}

    return(
            <div className="appMain">
                <div className="appHeader">
                    <Banner />
                </div>
                <body className="appContainer">
                    <div className="updateLeft">
                        <h2 className="orderTitle">Select Payment Type</h2>
                        <PaymentSummary />
                        <button className="SquarePayPage" onClick={() => navigate("SquarePay")}>Square Pay Page</button>
                        <div className="buttonBox">
                            <button className="squareButtonStyle" onClick={() => {post2DB("Credit/Debit"); navigate("SquareConfirmation")}}>Credit/Debit</button>
                            <button className="buttonStyle" onClick={() => {post2DB("Cash"); navigate("CashConfirmation")}}>Cash </button>
                            <button className="buttonStyle" onClick={() => {post2DB("E-Transfer"); navigate("ETransferConfirmation")}}>E-Transfer </button>
                        </div>
                    </div>
                    <div className="updateRight">
                        <Logo />  
                        <div className="progBar">
                            <h4 className="progressTitle">Steps:</h4><br></br>
                            <OurProgBar bgcolor="#17458f" progress='66'  height={30}/>
                            <ul>
                                <li className="progressText"><strong>Email:</strong> Completed</li>
                                 <li className="progressText"><strong>Quantity:</strong>  Completed</li>
                                <li className="progressText"><strong>Location:</strong>  Completed</li>
                                <li className="progressText"><strong>Payment: </strong> Pending...</li>
                            </ul> 
                        </div>
                        <CampLogo />
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