import React, { Component } from 'react';
//Bootstrap libs
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';
import Container from 'react-bootstrap/esm/Container.js';


export default class PaymentSummary extends Component {
    render(){
        //grabs email variable out of local storage
        const email = localStorage.getItem("email");
        //grabs qty variable out of local storage
        const quantity = localStorage.getItem("quantity");
        // grabs location
        const location = localStorage.getItem("location");

        const phoneNumber = localStorage.getItem("phoneNumber")

        

        return( // within this block we display email, firewood ordered amt, and total price
        <Container fluid>
            <Row>
                <Col>
                    <p className="orderTitle"><strong>Contact Information</strong></p>
                    <div className="loggedIn">
                        <label>Email:  </label> {email} <br></br><br></br>
                        <label>Number:  </label> {phoneNumber}<br></br><br></br>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="orderTitle"><strong>Order Details</strong></p>
                    <div className="loggedIn">
                        <label>Pickup location:  </label> {location}<br></br><br></br>
                        <label>Firewood Ordered:  </label> {quantity}<br></br><br></br>
                        <label>Total Price:  </label> ${quantity*9.99}<br></br><br></br>
                    </div>
                </Col>
            </Row>
        </Container>
        );            
    }
}