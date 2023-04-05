/*

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
                

                </Col>
            </Row>
            <Row style={{padding: 20, margin: 0}}>
                <Col>
                <Row>
                
                </Row >
                <Row style={{margin: 0}}>
                    <Col align="left">
                    <div className="bMain">
                        <h1 className="robotoSlab">How to Use the Admin Tools</h1><br></br>
                            <h2 className="robotoSlab">View Live Orders:</h2>
                            <h3 className="robotoSlab">     - On the "View Live Orders" page you will be able to see the inventory for your location and all the orders that need pickup or need approval.</h3><br/>
                            <h3 className="robotoSlab">     - You are able to update the stock at your location by inputting a number into the stock textbox and pressing the update button. There is also a Open/Close button which can be used to display/hide the location.</h3><br/>
                            <h3 className="robotoSlab">     - There is a button for Orders that need pickup and Orders that need approval.</h3><br/>
                            <h3 className="robotoSlab">     - Each of these buttons will display the respective orders and their information. These pages will allow you to change the status of each order to determine if they have been picked up or if they need to be approved/denied based on if the cash payment was made.</h3><br/>
                            <h3 className="robotoSlab">     - You can also search by phone number to find an order.</h3><br/>
                    </div>
                    </Col>
                </Row>
                <Row style={{margin: 0}}>
                    <Col style={{ padding: 10, marginTop: 10 }}>
                        
                     
                    </Col>
                 </Row>
                 </Col>
            </Row>
        </Container>
    );
}
export default Instructions;