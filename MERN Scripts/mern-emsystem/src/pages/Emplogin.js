import React from 'react'
import { Route, Routes, Link, useNavigate } from "react-router-dom";


import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import Emp from '../pages/Emp';

function Emplogin(){
    const navigateEmp = () => {
        useNavigate('/Emp');
    }


    return( 
        <div>
            <div className="main">
            <Banner />
            

            <div class="container">
                <h1>Sign In</h1>
                <form method="post">
                    <p>
                        <label for="username">Email:</label>
                        <input type="text" name="email" id="username"/>
                    </p>
                    <p>
                        <label for="password">Password:</label>
                        <input type="password" name="password" id="password" />
                    </p>
                    <button type="submit" id="submit" class="submit" onClick={navigateEmp}>Log In</button>
                </form>
            </div>
            

            
                <br/><br/>
            
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

        

export default Emplogin;