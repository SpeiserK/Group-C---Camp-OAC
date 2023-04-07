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

import React from 'react';
import Empbanner from '../components/Empbanner.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


function Instructions(){

    return(
        <Container fluid className="bEmp">
            <Row style={{padding: 0, margin: 0}}>
                <Col style={{padding: 0}} >
                    <Empbanner />
                </Col>
            </Row>
            <Row style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20, margin: 0}}>
                <Col>
                <Row style={{margin: 0}}>
                    <Col align="left">
                    <div className="bMain">
                    <Link to="/login/emp" style={{textDecoration: 'none' }}>
                            <button className="exitButton" style={{textDecoration: 'none' , color: 'black', display: 'inline-block', marginRight: '175px'}}>Back to Admin Page</button>
                        </Link>
                        <h1 className="robotoSlab" style={{display: 'inline-block'}}>How to Use the Admin Tools</h1>
                        
                        <br/><br/><h2 className="robotoSlab">View Live Orders:</h2>
                                <h3 className="robotoSlab">     - On the "View Live Orders" page you will be able to see the stock for your location and all the orders that need pickup or need approval.</h3><br/>
                                <h3 className="robotoSlab">     - You are able to update the stock at your location by inputting a number into the stock textbox and pressing the "Update" button. There is also a Open/Close button which can be used to display/hide the location. If you want to change the status of your location you must click "Update" for the changes to be made. When a location is Closed, customers will not be able to place orders at that location.</h3><br/>
                                <h2 className="robotoSlab">Orders that need pickup and Orders that need approval:</h2>
                                <h3 className="robotoSlab">     - Each of these buttons will display the respective orders and their information. These pages will allow you to change the status of each order to determine if they have been picked up or if they need to be approved/denied based on if the cash payment was made.</h3><br/>
                                <h3 className="robotoSlab">     - There is also a search bar that you can use to find the order(s) you are looking for. To search for an order enter the phone number that it is associated with.</h3><br/>
                                <br/>
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