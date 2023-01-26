import React from 'react'
import Navbar from '../components/Navbar.js';
import Empbanner from '../components/Empbanner.js';
import Empnav from '../components/Empnav.js';
import EmpTools from '../components/EmpTools.js';
import axios from "axios";
import EmployeeLiveDisp from '../components/EmployeeLiveDisp';

function OrderHistory(){
    

    return(
    <div className="appMain">
        <div className="appHeader">
            <Empbanner />
            <Empnav />
        </div>
        <body className="appContainer">
            <div className="empMainDiv">
                <EmployeeLiveDisp />
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
export default OrderHistory;