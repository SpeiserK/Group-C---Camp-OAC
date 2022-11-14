import { Link } from "react-router-dom";
import React from 'react'
import EmailCheck from "../components/hooks/matchEmail.js";
import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js';


function Startpage(){
    return(
        <div className="main">
            <div className="App">
                <header className="App-header">
                <h1>Camp OAC</h1>
                <Logo />
                </header>
            </div>
            <div className="container">
                <EmailCheck />
                <Link to="order">Click here to view Order page</Link><br/>
                
                <Link to="login">Click here to view Employee login page page</Link><br/> 
            </div>
            
            <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}

export default Startpage;