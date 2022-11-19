import React, { Component } from 'react';

export default class PaymentSummary extends Component {
    render(){
        const email = localStorage.getItem("email");

        return(
            <div>
                <p> {email} </p>
                <p> Firewood Ordered: xx </p> 
                <p> Total Price: $$$$ </p> 
                <a href="https://squareup.com/ca/en">LINK TO SQUARE</a> 
            </div>
        );            
    }
}