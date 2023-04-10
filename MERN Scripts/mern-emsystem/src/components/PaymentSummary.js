import React, { Component } from 'react';
//Bootstrap libs
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';
import Container from 'react-bootstrap/esm/Container.js';

//used in payment to display payment info

export default class PaymentSummary extends Component {
    render(){

        function formatPhoneNumber(phoneNum) {
            phoneNum = phoneNum.replaceAll("-", "");
            phoneNum = phoneNum.replaceAll("(", "");
            phoneNum = phoneNum.replaceAll(")", "");
            phoneNum = phoneNum.replaceAll(" ", "");
            return phoneNum;
        }
        //grabs email variable out of session storage
        
        const email = sessionStorage.getItem("email");

        //grabs qty variable out of session storage
        const quantity = sessionStorage.getItem("quantity");
        // grabs location
        const location = sessionStorage.getItem("location");

        var phoneNumber = sessionStorage.getItem("phoneNumber");
        phoneNumber = formatPhoneNumber(phoneNumber);




        

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
                        <label className="orderTitle">Total Price:  </label> ${quantity*sessionStorage.getItem("price")}<br></br><br></br>
                    </div>
                </Col>
            </Row>
        </Container>
        );            
    }
}