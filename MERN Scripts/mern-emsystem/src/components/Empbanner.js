import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './Logo.js'


export default class Empbanner extends Component {
    render(){

        return(
                <header className="empBanner">
                    <h1 className="Link">Rotary Club of Kelowna Ogopogo</h1>
                    <Link to="/" className="adminLink" style={{textDecoration: 'none', padding: 20 }}><h1>Click here to return to Home Page</h1></Link>
                </header>
        );            
    }
}