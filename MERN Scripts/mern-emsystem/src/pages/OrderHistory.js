import React from 'react'
import Navbar from '../components/Navbar.js';
import Empbanner from '../components/Empbanner.js';
import Empnav from '../components/Empnav.js';
import OrderDispHist from '../components/OrderDispHist.js'

function OrderHistory(){
    

    return(
    <div className="appMain">
        <div className="appHeader">
            <Empbanner />
            
        </div>
        <body className="appContainer">
            <div className="empMainDiv">
                <OrderDispHist />
            </div>
        </body>
       
    </div>
    );
}
export default OrderHistory;