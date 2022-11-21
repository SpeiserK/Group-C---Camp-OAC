import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class EmpTools extends Component {
    render() {
        return(
        <div className="adminTools">
            <button className="viewOrders" style={{textDecoration: 'none' , color: 'black'}}>
            <Link to="/login/emp/viewOrders" style={{textDecoration: 'none' }}>View Current Orders</Link>
            </button>

            <button className="inventoryByLoc" style={{textDecoration: 'none' , color: 'black'}}>
            <Link to="/login/emp/inventory" style={{textDecoration: 'none' }}>Inventory By Location</Link>
            </button>

            <button className="orderHistory" style={{textDecoration: 'none' , color: 'black'}}>
            <Link to="/login/emp/history" style={{textDecoration: 'none' }}>Order History</Link>
            </button>
        </div>
        );
    }
}