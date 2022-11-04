import React from 'react'
import { Link } from "react-router-dom";
import Locations_List from '../components/Locations_List.js';
import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js';

function Location(){
    return(
        
        <div>
            <div className="main">
            <div className="App">
                <header className="App-header">
                <h1>Camp OAC</h1>
                <Logo />
                </header>
            </div>
            <Locations_List />
            <Link to="/order">Click here to go to order page</Link>
        </div>
        <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}

export default Location;