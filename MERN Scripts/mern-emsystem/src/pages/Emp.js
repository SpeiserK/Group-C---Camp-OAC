import React from 'react'
import { Link } from "react-router-dom";

import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';


function Emp(){
    return(
        <div className="main">
            <Banner />
            <div className="container">
                
                
            </div>
            
            <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}
export default Emp;