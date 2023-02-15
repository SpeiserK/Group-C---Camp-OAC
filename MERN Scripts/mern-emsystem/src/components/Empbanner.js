import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Empbanner extends Component {
    render(){

        return(
                <header className="empBanner">
                    <Link to="/login/emp" style={{textDecoration: 'none' }}>
            <button className="viewOrders" style={{textDecoration: 'none' , color: 'black'}}>
            View Live Orders and Stock
            </button> </Link>

            <Link to="/login/emp/history" style={{textDecoration: 'none' }}>
            <button className="orderHistory" style={{textDecoration: 'none' , color: 'black'}}>
            Order History
            </button> </Link>

            <Link to="/login/emp/employee" style={{textDecoration: 'none' }}>
            <button className="employeeList" style={{textDecoration: 'none' , color: 'black'}}>
            Employee Login List
            </button> </Link>

                    <Link to="/" className="adminLink" style={{textDecoration: 'none', padding: 20 }}><h1>Click here to return to Home Page</h1></Link>
                </header>
        );            
    }
}