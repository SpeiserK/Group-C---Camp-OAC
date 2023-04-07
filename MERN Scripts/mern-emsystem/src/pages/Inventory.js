import React from 'react'
import Banner from '../components/Banner.js';
import InvByLoc from '../components/hooks/InvByLoc.js';

/* this is a page that displays inventory however there is currently no way to route to it but could be used later if developers wanted */

function ViewOrders(){
    return(
    <div className="appMain">
        <div className="appHeader">
            <Banner />
        </div>
        <body className="appContainer">
            <div className="empMainDiv">
                <InvByLoc />
            </div>
        </body>
        <div className="footer">
            <footer className="App-footer">
            </footer>
        </div>
    </div>
    );
}
export default ViewOrders;