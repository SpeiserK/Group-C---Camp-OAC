import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js';
import LocationsList from '../components/LocationsList.js';
import Textbox from '../components/Textbox.js';

function Orderqty(){
    return(
        
        <div>
            <div className="main">
            <div className="App">
                <header className="App-header">
                <h1>Camp OAC</h1>
                <Logo />
                </header>
            </div>
            <p>Select firewood quantity.</p>
            
            <LocationsList /> 
            <Link to="/">Click here to go back</Link>
        </div>
        <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}

export default Orderqty;