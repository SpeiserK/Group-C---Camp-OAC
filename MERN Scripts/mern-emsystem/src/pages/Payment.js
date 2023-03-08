import React from 'react';
import { useNavigate } from "react-router-dom";
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';
import { useState } from 'react';
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import axios from 'axios';
//Bootstrap libs
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';
import Container from 'react-bootstrap/esm/Container.js';
import Button from 'react-bootstrap/Button';

/* OLD BUTTONS IN CASE WE SWITCH BACK
<button className="buttonStyle" onClick={() => {post2DB("Square"); navigate("SquarePay")}}>Square Pay Page</button>
<button className="buttonStyle" onClick={() => {post2DB("Cash"); navigate("CashConfirmation")}}>Cash </button>
<button className="buttonStyle" onClick={() => {post2DB("E-Transfer"); navigate("ETransferConfirmation")}}>E-Transfer </button>
*/


function Payment(){
const navigate = useNavigate();

function post2DB(type) {
    
    //function to post to database takes type which is a string value
    //creates a new order from the session storage values 
    
    
    const newOrder = {
       // Name: sessionStorage.getItem("email"),
        Name: sessionStorage.getItem("email"),
        Quantity: sessionStorage.getItem("quantity"),
        Location: sessionStorage.getItem("location"),
        Payment: type,
        phoneNumber: sessionStorage.getItem("phoneNumber")
    }
    // axios posts to our though orderroute file with the new order information
    // order route function: router.route("/send").post((req, res)


    axios.post('http://localhost:5001/send', newOrder);
    
}

    return(

<div className="bContainer">
<Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Row>
    <Banner /> 
    </Row>
    <Row>
        <Col className="whiteSideBar">
        </Col>
        <Col xl={{span: 7, offset: 0}} lg={{span: 7, offset: 0}} md={{span: 7, offset: 0}} sm={{span:12, offset: 0}} xs={{span: 12, offset: 0}} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bOrder">
            <h2 className="mainOrderTitle">Order Summary</h2>
            <hr></hr>
            <br></br>
                <Col lg={{span:12,offset: 1}}>
                    <PaymentSummary />
                </Col>
            </div>
        </Col>
        <Col xl={{span: 4, offset: 0}} lg={{span:4, offset: 0}} md={{span:4, offset: 0}} sm={{span: 12, offset: 0}} xs={{span: 12, offset: 0}} style={{ paddingLeft: 0, paddingRight: 0}}>
            <div className="bPay2">
                <h3 className="payOrderTitle"><strong>Select Payment Type</strong></h3>
                <div className="payForm">
                    <PaymentForm
                    applicationId="sandbox-sq0idb-7JEDuestTK6Hj-fdj6C0FA"
                    locationId="LS2QD8Y1ET9FY"
                    // Generates unique token to be assigned to transaction
                    cardTokenizeResponseReceived={async (token, buyer) => {
                    // Request body
                    // Contains: locationId, applicationId, sourceId, and quantity
                    const body = JSON.stringify({
                        locationId: process.env.SQUARE_LOCATION_ID,
                        applicationId: process.env.SQUARE_APPLICATION_ID,
                        sourceId: token
                    });
                    console.log("Token Received: ", token);
                    // Post request to backend 
                    const response = await fetch('http://localhost:5001/charge', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: body
                    });
                    
                    const data = await response.json();
                    console.log(data);

                    async function statusCheck(onSuccess) {
                        if (data.errors && data.errors.length > 0) {
                            if (data.errors[0].detail) {
                                window.showError(data.errors[0].detail);
                            } else {
                                window.showError('Payment Failed.');
                            }
                        } else {
                            onSuccess()
                        }
                    }
                    statusCheck(() => navigate("SquareReceipt"));
                    }
                    }
                >
                {/* Component for taking Credit Card payment */}
                <CreditCard />
                
                </PaymentForm>
                </div>
                <Row>
                        <Col md={{offset:0, span: 5}} sm={{offset:0, span: 5}}>
                            <div className="hrBox">
                                <hr></hr>
                            </div>
                        </Col>
                            <Col lg={{offset:0, span: 2}} md={{offset:0, span: 2}} sm={{offset:0, span: 2}}>
                                <div className="orBox">
                                    <p className="orderTitle">OR</p>
                                </div>
                            </Col>
                        <Col md={{offset:0, span: 5}} sm={{offset:0, span: 5}}>
                            <div className="hrBox">
                                <hr></hr>
                            </div>
                        </Col>
                </Row>
                <Row>
                    <div className="buttonBox"> 
                        <Col xl={{ span: 1, offset: 11 }} lg={{ span: 1, offset: 8 }} md={{ span: 1, offset: 0 }} sm={{ span: 4, offset: 11 }} xs={{ span: 4, offset: 11 }}>
                            <Button variant="primary" size="lg" onClick={() => {post2DB("Cash"); navigate("CashConfirmation")}}>Cash</Button>
                        </Col>
                        <Col xl={{ span: 8, offset: 9 }} lg={{ span: 8, offset: 6 }} md={{ span: 1, offset: 1 }} sm={{ span: 8, offset: 11 }} xs={{ span: 8, offset: 11 }}>
                            <Button variant="primary" size="lg" onClick={() => {post2DB("E-Transfer"); navigate("ETransferConfirmation")}}>E-Transfer</Button>
                        </Col>
                    </div>
                </Row>
            </div>
        </Col> 
        <Col className="whiteSideBar">
        </Col> 
    </Row>
</Container>
</div>
    );
}

export default Payment;