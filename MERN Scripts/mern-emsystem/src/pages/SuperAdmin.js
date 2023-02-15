import React from 'react'
import Navbar from '../components/Navbar.js';
import Empbanner from '../components/Empbanner.js';
import Empnav from '../components/Empnav.js';
import EmployeeLiveDisp from '../components/EmployeeLiveDisp';
import EmployeeCreation from '../components/Signup/EmpSignup';
import LocationManagement from '../components/LocationManagement';

function SuperAdmin(){
    return(
    <div className="appMain">
        <div className="appHeader">
            <Empbanner />
            
        </div>
        <body className="appContainer">
            <div className="empMainDiv">
                <EmployeeLiveDisp />
                <EmployeeCreation />
                <LocationManagement />
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
export default SuperAdmin;