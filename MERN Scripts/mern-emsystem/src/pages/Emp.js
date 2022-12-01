import React from 'react'
import EmpTools from '../components/EmpTools.js';
import axios from "axios";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
const {useEffect, useState} = React;



function Emp(){
    return(
    <div className="appMain">
        <div className="appHeader">
           <Banner />
        </div>
        <body className="appContainer">
            <div className="empLeftDiv">
                <EmpTools />
            </div>
            <div className="empRightDiv">
               
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