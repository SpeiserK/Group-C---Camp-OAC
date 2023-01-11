import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import OurProgBar from '../components/OurProgBar.js';
import axios from 'axios';

//import PlaceOrder from '..components/hooks/placeOrder.js';


function Payment(){
const navigate = useNavigate();

function post2DB() {
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
                    <div className="updateLeft">
                        <h2 className="orderTitle">Select Payment Type</h2>
                        <PaymentSummary />
                        <div className="buttonBox">
                            <button className="buttonStyle" onClick={() => {post2DB(); navigate("SquareConfirmation")}}>Pay with Square</button>
                            <button className="buttonStyle" onClick={() => {post2DB(); navigate("CashConfirmation")}}> Pay with Cash </button>
                            <button className="buttonStyle" onClick={() => {post2DB(); navigate("ETransferConfirmation")}}> Pay with e-transfer </button>
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