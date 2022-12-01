import React from 'react';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import OrderLiveDisp from '../components/OrderLiveDisp.js';

function approve() {
    var elements = document.getElementByClassName("orderList");
    for (var i in elements) {
      //if (elements.hasOwnProperty(i)) {
        elements[i].className = "approved";
      //}
    }
  }

function ViewOrders(){
    return(
        <div className="appMain">
          <div className="appHeader">
            <Banner />
          </div>
          <body className="appContainer">
            <div className="empMainDiv">
              <OrderLiveDisp />
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
export default ViewOrders;