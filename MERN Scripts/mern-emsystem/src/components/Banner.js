import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './Logo.js'
export default class Banner extends Component {
    render(){
        return(
            <div className="App">
                <header className="App-header">
                <Link to="/" className="Link" style={{textDecoration: 'none', padding: 20 }}><h1>Camp OAC</h1></Link>
                <Logo />
                </header>
            </div>
        );            
    }
}