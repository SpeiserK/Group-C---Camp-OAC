import React from 'react'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import InvByLoc from '../components/hooks/InvByLoc.js';


function ViewOrders(){

    return(
        <div className="main">
            <Banner />

            <div className="mainDiv">
                <InvByLoc />
            
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