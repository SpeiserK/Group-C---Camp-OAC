/*

import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default class Empbanner extends Component {

        
    render(){
       

        return(
                <Row align="center" style={{margin: 0}}>
                <header className="empBanner">
                    <Col md>

                    <Link to="/login/emp" style={{textDecoration: 'none' }}>
            <button className="viewOrders" style={{textDecoration: 'none' , color: 'black'}}>
            View Live Orders
            </button> </Link>
                    </Col>
                    <Col md>     
            <Link to="/login/emp/history" style={{textDecoration: 'none' }}>
            <button className="orderHistory" style={{textDecoration: 'none' , color: 'black'}}>
            View Order History
            </button> </Link>
                    </Col>
                    <Col md>
            <Link to="/login/emp/employee" style={{textDecoration: 'none' }}>
            <button className="employeeList" style={{textDecoration: 'none' , color: 'black'}}>
            Volunteers & Locations
            </button> </Link>
                    </Col>
                    <Col sm>
                    <Link to="/" style={{textDecoration: 'none' }}>
                    <button className="exitButton" style={{textDecoration: 'none' , color: 'black'}}>
                    Log out
                    </button>
                    </Link>
                    </Col>
                </header>
                </Row>
        );            
    }
}

*/

import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default class Empbanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            adminLocAccess: sessionStorage.getItem('adminLocAccess')
        };
    }

    handleLogout() {
        sessionStorage.clear();
    }

    render(){

        const { adminLocAccess } = this.state;

        return(
            <Row align="center" style={{margin: 0}}>
                <header className="empBanner">
                    <Col md>
                        { adminLocAccess === 'admin' ? (
                            <Link to="/login/emp" style={{textDecoration: 'none' }}>
                                <button className="viewOrders" style={{textDecoration: 'none' , color: 'black'}}>
                                    View Live Orders
                                </button>
                            </Link>
                        ) : <h3 className="robotoSlab" align="center"> { adminLocAccess } admin page</h3> }
                    </Col>
                    <Col md>
                        { adminLocAccess === 'admin' ? (
                            <Link to="/login/emp/history" style={{textDecoration: 'none' }}>
                                <button className="orderHistory" style={{textDecoration: 'none' , color: 'black'}}>
                                    View Order History
                                </button>
                            </Link>
                        ) : null }
                    </Col>
                    <Col md>
                        { adminLocAccess === 'admin' ? (
                            <Link to="/login/emp/employee" style={{textDecoration: 'none' }}>
                                <button className="employeeList" style={{textDecoration: 'none' , color: 'black'}}>
                                    Volunteers & Locations
                                </button>
                            </Link>
                        ) : null }
                    </Col>
                    <Col sm>
                        <Link to="/" style={{textDecoration: 'none' }}>
                            <button className="exitButton" style={{textDecoration: 'none' , color: 'black'}} onClick={this.handleLogout}>
                                Log out
                            </button>
                        </Link>
                    </Col>
                </header>
            </Row>
        );            
    }
}