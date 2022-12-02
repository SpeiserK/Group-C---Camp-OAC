import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import OurProgBar from '../components/OurProgBar.js';


//import PlaceOrder from '..components/hooks/placeOrder.js';

function CashConfirmation(){
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
                <p> Because you have selected cash payment your order is under review , please check your email for updates from our team!
                (WIP, email confirmation not functioning yet)
                </p>
                
                <div className="buttonBox">
                            <button className="buttonStyle" onClick={() => {navigate("/")}}>homepage</button>
                    </div>
            </div>
            <div className="rightDiv">
                <div className="progBar">
                    <h4 className="progressTitle">Complete</h4><br></br>
                    <OurProgBar bgcolor="#17458f" progress='100'  height={30}/>
                    <ul>
                        <li className="progressText"><strong>Email:</strong> Completed</li>
                        <li className="progressText"><strong>Quantity:</strong>  Completed</li>
                        <li className="progressText"><strong>Location:</strong>  Completed</li>
                        <li className="progressText"><strong>Payment: </strong> Completed</li>
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

export default CashConfirmation;