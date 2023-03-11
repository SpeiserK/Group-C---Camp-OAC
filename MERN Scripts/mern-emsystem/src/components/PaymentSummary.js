import React, { Component } from 'react';
//Bootstrap libs
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';
import Container from 'react-bootstrap/esm/Container.js';


export default class PaymentSummary extends Component {
    render(){
        //grabs email variable out of session storage
        
        const email = sessionStorage.getItem("email");

        //grabs qty variable out of session storage
        const quantity = sessionStorage.getItem("quantity");
        // grabs location
        const location = sessionStorage.getItem("location");

        const phoneNumber = sessionStorage.getItem("phoneNumber")

        

        return( // within this block we display email, firewood ordered amt, and total price
        <Container fluid>
            <Row>
                <Col>
                    <p className="orderTitle"><strong>Contact Information</strong></p>
                    <div className="loggedIn">
                        <label className="orderTitle">Email:  </label> {email} <br></br><br></br>
                        <label className="orderTitle">Number:  </label> {phoneNumber}<br></br><br></br>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="orderTitle"><strong>Order Details</strong></p>
                    <div className="loggedIn">
                        <label className="orderTitle">Pickup location:  </label> {location}<br></br><br></br>
                        <label className="orderTitle">Firewood Ordered:  </label> {quantity}<br></br><br></br>
                        <label className="orderTitle">Total Price:  </label> ${quantity*9.99}<br></br><br></br>
                    </div>
                </Col>
            </Row>
        </Container>
        );            
    }
}