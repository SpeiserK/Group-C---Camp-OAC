import React, { Component } from 'react';

export default class PaymentSummary extends Component {
    render(){
        //grabs email variable out of local storage
        const email = localStorage.getItem("email");
        //grabs qty variable out of local storage
        const quantity = localStorage.getItem("quantity");
        // grabs location
        const location = localStorage.getItem("location");

        return( // within this block we display email, firewood ordered amt, and total price
            <div>
                <p> logged in as: {email} </p> 
                <p> Pickup location: {location}</p>
                <p> Firewood Ordered: {quantity} </p> 
                <p> Total Price: $$$$ </p> 
                <a href="https://squareup.com/ca/en">LINK TO SQUARE</a> 
            </div>
        );            
    }
}