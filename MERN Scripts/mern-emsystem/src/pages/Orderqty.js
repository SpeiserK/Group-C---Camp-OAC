import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';

import Banner from '../components/Banner.js';

import PlaceOrder from '../components/hooks/placeOrder.js';
import Woodimg from '../components/Woodimg.js';
import OurProgBar from '../components/OurProgBar.js';
import Bundles2 from '../components/Bundles2.js';

import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Orderqty(){
    return( 
        <div className="appMain">
            <div className="appHeader">
                <Banner />
            </div>
            <body className="appContainer">
                <div className="updateLeft">
                    <h2 className="orderTitle">Enter Order Details</h2>
                    <PlaceOrder />
                    <div className="bundleDiv">
                        <Bundles2 />
                        
                        <p className="bundleText"><FontAwesomeIcon icon={faCircleInfo}/><br></br><br></br>Here is what the process of bundle making looks like! You can expect a similar bundle size as the ones shown in this image.</p>
                    </div>
                   
                 </div>
                <div className="updateRight">
                    <Logo />
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
                    <Woodimg />
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