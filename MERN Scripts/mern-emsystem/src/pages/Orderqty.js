import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import LocationsList from '../components/LocationsList.js';
import Banner from '../components/Banner.js';


function Orderqty(){
    return( 
        <div>
            <div className="main">
            <Banner />

            <p>Input the number of firewood bundles you would like to purchase.</p>
            <p id="email">Logged in as:</p>
             <form>
                <label for="quantity">
                    Number of bundles:     
                    <input type="text" id="quantity" name="quantity" autoComplete="off"/>
                    <input type="submit" value="Next" />
                    <br></br>
                </label>
                </form>
                <br></br>
            <LocationsList /> 

            <Link to="/">Click here to go back</Link><br></br>
            <Link to="payment">Click here to view Payment page</Link>
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