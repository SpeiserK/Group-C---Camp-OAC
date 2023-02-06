import React, { Component } from 'react';


export default class PaymentSummary extends Component {
    render(){
        //grabs email variable out of local storage
        const email = localStorage.getItem("email");
        //grabs qty variable out of local storage
        const quantity = localStorage.getItem("quantity");
        // grabs location
        const location = localStorage.getItem("location");

        const phoneNumber = localStorage.getItem("phoneNumber")

        

        return( // within this block we display email, firewood ordered amt, and total price
        <div>
            <div className="loggedIn">
                <label>Email:  </label> {email} <br></br><br></br>
                <label>Number:  </label> {phoneNumber}<br></br><br></br>
                <label>Pickup location:  </label> {location}<br></br><br></br>
                <label>Firewood Ordered:  </label> {quantity}<br></br><br></br>
                <label>Total Price:  </label> ${quantity*9.99}<br></br><br></br>
            </div>
        </div>
        );            
    }
}