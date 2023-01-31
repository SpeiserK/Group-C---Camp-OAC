import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LocationSelect from "./LocationSelect";

export default class Empnav extends Component {
    render(){
        return(
            <div>
                <div className="empHeader">
                <div className="adminTools">
            <Link to="/login/emp" style={{textDecoration: 'none' }}>
            <button className="viewOrders" style={{textDecoration: 'none' , color: 'black'}}>
            View Live Orders and Stock
            </button> </Link>
            
            <LocationSelect />

            <Link to="/login/emp/history" style={{textDecoration: 'none' }}>
            <button className="orderHistory" style={{textDecoration: 'none' , color: 'black'}}>
            Order History
            </button> </Link>

            <Link to="/login/emp/employee" style={{textDecoration: 'none' }}>
            <button className="employeeList" style={{textDecoration: 'none' , color: 'black'}}>
            Employee Login List
            </button> </Link>
        </div>
                </div>
            </div>
        );            
    }
}