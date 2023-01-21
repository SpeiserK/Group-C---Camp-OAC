import React from 'react';
import {Link, useNavigate} from "react-router-dom";


import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import Emp from '../pages/Emp';
import EmpSignup from '../components/Signup/EmpSignup.js';
import EmpLogin from '../components/Login/EmpLogin.jsx';



function Emplogin(){
    return( 
    <div className="appMain">
        <div className="appHeader">
            <Banner />
        </div>
        <body className="appContainer">
            <div className="empLoginDiv">
                {/*
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
                        <Link to="Emp"><button type="submit" id="submit" class="submit">Log In</button></Link>
                    </form>
                */}
                    
                    <EmpSignup />
                    <EmpLogin />
                    
                    
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

        

export default Emplogin;