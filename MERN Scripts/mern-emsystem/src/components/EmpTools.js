import { Link } from "react-router-dom";
import React, { Component, useState } from "react";
import LocationSelect from "./LocationSelect";

/*
 <Link to="/login/emp/inventory" style={{textDecoration: 'none' }}>
            <button className="inventoryByLoc" style={{textDecoration: 'none' , color: 'black'}}  >
            Inventory By Location
            </button> </Link>


*/


export default class EmpTools extends Component {
   
    render() {
        return(
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
        );
    }
}