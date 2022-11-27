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
            <div className="loggedIn">
                 <p id="email" >Logged in as: {email} </p>
            </div>
            <div className="orderText">
                <p> Pickup location: {location}</p>
                <p> Firewood Ordered: {quantity} </p> 
                <p> Total Price: ${quantity*14.99} </p>   
            </div>
        </div>
        );            
    }
}