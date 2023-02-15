import React from 'react';
import { useNavigate } from "react-router-dom";
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';
import Container from 'react-bootstrap/esm/Container.js';


function Payment(){
const navigate = useNavigate();

function post2DB(type) {
    
    //function to post to database takes type which is a string value
    //creates a new order from the local storage values 
    
    
    const newOrder = {
        Name: localStorage.getItem("email"),
        Quantity: localStorage.getItem("quantity"),
        Location: localStorage.getItem("location"),
        Payment: type,
        phoneNumber: localStorage.getItem("phoneNumber")
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
        <Col lg={9} md={10} sm={11} xs={11} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bOrder">
            <h2 className="orderTitle">Select Payment Type</h2>
                <Col lg={{span:12,offset: 1}}>
                    <PaymentSummary />
                        <div className="buttonBox">
                            <button className="buttonStyle" onClick={() => {post2DB("Square"); navigate("SquarePay")}}>Square Pay Page</button>
                            <button className="buttonStyle" onClick={() => {post2DB("Cash"); navigate("CashConfirmation")}}>Cash </button>
                            <button className="buttonStyle" onClick={() => {post2DB("E-Transfer"); navigate("ETransferConfirmation")}}>E-Transfer </button>
                        </div>
                </Col>
            </div>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bPay2">
                
            </div>
        </Col>  
    </Row>
</Container>
</div>
    );
}

export default Payment;