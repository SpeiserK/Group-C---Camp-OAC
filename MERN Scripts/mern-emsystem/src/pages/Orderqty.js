import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';

import Banner from '../components/Banner.js';

import PlaceOrder from '../components/hooks/placeOrder.js';
import Woodimg from '../components/Woodimg.js';
import OurProgBar from '../components/OurProgBar.js';

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
                    <Woodimg />
                 </div>
                <div className="rightDiv">
                    <div className="progBar">
                        <h4 className="progressTitle">Steps:</h4><br></br>
                        <OurProgBar bgcolor="#17458f" progress='33'  height={30}/>
                        <ul>
                            <li className="progressText"><strong>Email:</strong>  Completed</li>
                            <li className="progressText"><strong>Quantity:</strong>  Pending...</li>
                            <li className="progressText"><strong>Location:</strong>  Pending...</li>
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

export default Orderqty;