import React from 'react'
import EmpTools from '../components/EmpTools.js';
import InvByLoc from '../components/hooks/InvByLoc.js';
import OrderLiveDisp from '../components/OrderLiveDisp.js';
import axios from "axios";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import OrderDispHist from '../components/OrderDispHist.js';
import LocationLiveDisp from '../components/LocationLiveDisp.js';
import Empnav from '../components/Empnav.js';
import Empbanner from '../components/Empbanner.js';
const {useEffect, useState} = React;



function Emp(){
    return(
    <div className="appMain">
        <div className="appHeader">
           <Empbanner />
           <Empnav />
        </div>
        <body className="appContainer">
            <div className="empLeftDiv"> 
                 <OrderLiveDisp />
            </div>
            <div className="empRightDiv">
            
                
                <LocationLiveDisp/>
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
export default Emp;