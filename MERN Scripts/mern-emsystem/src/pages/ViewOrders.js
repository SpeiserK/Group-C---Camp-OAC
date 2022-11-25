import React from 'react';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import OrderLiveDisp from '../components/OrderLiveDisp.js';

function ViewOrders(){
    return(
        <div className="main">
            <Banner />
            <div className="container">
                
            <OrderLiveDisp />
            </div>
            
            <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}
export default ViewOrders;