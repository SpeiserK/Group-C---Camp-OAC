import React from 'react'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import axios from "axios";
import OrderDispHist from '../components/OrderDispHist.js'






function OrderHistory(){
    

    return(
        <div className="main">
            <Banner />
            <div className="container">
            
            <OrderDispHist />

            </div>
            <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}
export default OrderHistory;