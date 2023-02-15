import React from 'react'
import Banner from '../components/Banner.js';
import InvByLoc from '../components/hooks/InvByLoc.js';


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