import React from 'react'
import OrderLiveDisp from '../components/OrderLiveDisp.js';
import Navbar from '../components/Navbar.js';
import LocationLiveDisp from '../components/LocationLiveDisp.js';
import Empnav from '../components/Empnav.js';
import Empbanner from '../components/Empbanner.js';

// grab the location lolololol
const empLocation = localStorage.getItem('selectedLocation');

function Emp(){
    return(
    <div className="appMain">
        <div className="appHeader">
           <Empbanner />
           <Empnav />
        </div>
        <body className="appContainer">
            <div className="empLeftDiv"> 
                <LocationLiveDisp queryLoc={empLocation} />
                <h2>Orders that need pickup</h2>
                 <OrderLiveDisp query1={'Approved'} queryLoc={empLocation} />
                 <h2>Orders that need approval/denial</h2>
                 <OrderLiveDisp query1={'Pending'} queryLoc={empLocation} />
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
export default Emp;