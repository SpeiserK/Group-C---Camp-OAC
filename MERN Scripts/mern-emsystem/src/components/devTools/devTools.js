import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { text } from '@fortawesome/fontawesome-svg-core';

//optional dev tools for developers, removed from final version
export default class Navbar extends Component {
    render(){
        return (
            <div className="Nav">
                <button style={{textDecoration: 'none' , color: 'black', fontSize: '14px',marginTop: '10px'}}>
                <Link to="/login" style={{textDecoration: 'none' }}>Admin Portal</Link>
                </button>
                <button style={{textDecoration: 'none' , color: 'black', fontSize: '14px',marginTop: '10px'}}>
                <Link to="login/Emp" style={{textDecoration: 'none' }}>Admin Dash</Link>
                </button>
                <button style={{textDecoration: 'none' , color: 'black', fontSize: '14px',marginTop: '10px'}}>
                <Link to="order" style={{textDecoration: 'none' }}>order page</Link>
                </button>
                <button style={{textDecoration: 'none' , color: 'black', fontSize: '14px',marginTop: '10px'}}>
                <Link to="order/payment" style={{textDecoration: 'none' }}>order page</Link>
                </button>
            </div>
        )
    }
}
