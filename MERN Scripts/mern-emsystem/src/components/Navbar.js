import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render(){
        return(
            <div className="mainNav">
                <button style={{textDecoration: 'none' , color: 'black'}}>
                <Link to="/login" style={{textDecoration: 'none' }}>Admin Portal</Link>
                </button>
            </div>
        );            
    }
}