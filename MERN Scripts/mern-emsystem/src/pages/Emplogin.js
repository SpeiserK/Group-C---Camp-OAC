import React from 'react';
import Banner from '../components/Banner.js';
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
                    <EmpSignup />
                    <EmpLogin />
            </div>
        </body>
    </div>
    );
}

        

export default Emplogin;