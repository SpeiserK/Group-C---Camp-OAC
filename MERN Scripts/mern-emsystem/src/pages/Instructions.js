/*
<?php
    echo "<h1>How to Use the Admin Tools</h1>";
    echo "<p>";
    echo "On your employee page you will be able to see the inventory for your location and all orders that ";
    echo "need pickup or need approval.";
    echo "<br></br>";
    echo "You are able to update the stock at your location by inputting a number into the stock textbox and ";
    echo "pressing the update button. There is also a Open/Close button which can be used to display/hide the location.";
    echo "<br></br>";
    echo "There is a button for Orders that need pickup and Orders that need approval.";
    echo "Each of these buttons will display the respective orders and their information. These pages will allow you to ";
    echo "change the status of each order to determine if they have been picked up or if they need to be approved/denied ";
    echo "based on if the cash payment was made.";
    echo "<br></br>";
    echo "You can also search by phone number to find an order.";
    echo "</p>";
?>
*/

import React from 'react'
import OrderLiveDisp from '../components/OrderLiveDisp.js';
import LocationLiveDisp from '../components/LocationLiveDisp.js';
import Empnav from '../components/Empnav.js';
import Empbanner from '../components/Empbanner.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";


function Instructions(){

    return(
        <Container fluid className="bEmp">
            <Row style={{padding: 0, margin: 0}}>
                <Col style={{padding: 0}} >
                    <Empbanner />
                </Col>
            </Row>
            <Row style={{paddingRight: 0, marginRight: 0}}>
                <Col style={{margin: 0, padding: 0}}>
                <Empnav />

                </Col>
            </Row>
            <Row style={{padding: 20, margin: 0}}>
                <Col>
                <Row>
                <h1 className="robotoSlab" align="center">Live Orders For {empLocation}</h1>
                <br></br>

                <LocationLiveDisp queryLoc={empLocation} />
                </Row >
                <Row style={{margin: 0}}>
                    <Col align="center">
                        <div className='liveOrderButtons'>
                            <button className={`viewOrders ${query1 === 'Approved' ? 'selected' : ''}`} onClick={handleApprovedClick}>Orders that need pickup</button>
                            <button className={`viewOrders ${query1 === 'Pending' ? 'selected' : ''}`} onClick={handlePendingClick}>Orders that need approval</button>
                        </div>
                    </Col>
                    <Col align="right">
                        <form onSubmit={(e) => handleSubmit()}> 
                            <Form.Control type="text" id="phoneNum" onChange={handlePhone} placeholder="Search by Phone #" className="liveorderPhone"/>
                        {  phoneData !== "" ?(
                            <div className="phoneSearchBox">
                                <p className="robotoSlab">Searching for : {phoneData}</p>
                                <Button type="button" variant="danger" size="sm" onClick={handleReset}>Clear</Button>
                            </div>
                            ): (<></>)
                        }
                        </form>
                    </Col>
                </Row>
                <Row style={{margin: 0}}>
                    <Col style={{ padding: 10, marginTop: 10 }}>
                        
                     <OrderLiveDisp query1={query1} queryLoc={empLocation} queryPhone={phoneData} />
                    </Col>
                 </Row>
                 </Col>
            </Row>
        </Container>
    );
}
export default Instructions;