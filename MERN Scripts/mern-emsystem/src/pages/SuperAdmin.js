import React from 'react'
import Empbanner from '../components/Empbanner.js';
import Empnav from '../components/Empnav.js';
import EmployeeLiveDisp from '../components/EmployeeLiveDisp';
import EmployeeCreation from '../components/Signup/EmpSignup';

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
            </div>
        </body>
        <div className="footer">
            <footer className="App-footer">
        
            </footer>
        </div>
    </div>
    );
}
export default SuperAdmin;