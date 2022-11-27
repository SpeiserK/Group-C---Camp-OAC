import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './Logo.js'
import Dropdown from './Dropdown.js';
import Progressbar from './Progressbar.js';
export default class Banner extends Component {
    render(){

       
        return(
            <div>
                <header className="App-header">
                <Link to="/" className="Link" style={{textDecoration: 'none', padding: 20 }}><h1>Rotary Club of Kelowna Ogopogo</h1></Link>
                <Dropdown />
                </header>
            </div>
        );            
    }
}