import React, { Component } from 'react';

export default class Navbar extends Component {
    render(){
        return(
            <div className="mainNav">
                <h2>Rotary Club</h2>
                <ul id="main-menu">
                    <li>Contact Us</li>
                    <li>Facebook</li>
                </ul>
            </div>
        );            
    }
}