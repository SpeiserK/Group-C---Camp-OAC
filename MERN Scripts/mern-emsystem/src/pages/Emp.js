import React from 'react'
import EmpTools from '../components/EmpTools.js';
import InvByLoc from '../components/hooks/InvByLoc.js';
import OrderLiveDisp from '../components/OrderLiveDisp.js';
import axios from "axios";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import OrderDispHist from '../components/OrderDispHist.js';
const {useEffect, useState} = React;



function Emp(){
    return(
    <div className="appMain">
        <div className="appHeader">
           <Banner />
        </div>
        <body className="appContainer">
            <div className="empLeftDiv">
                <div className="superAdminTop">
                    <InvByLoc />
                    <OrderLiveDisp />
                </div>
                <OrderDispHist />
            </div>
            <div className="empRightDiv">
                <EmpTools /> 
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