import React from 'react';
import Banner from '../components/Banner.js';
import PlaceOrder from '../components/hooks/placeOrder.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container.js';

function Orderqty(){
    return( 
<div className="bContainer">
<Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Row>
    <Banner /> 
    </Row>
    <Row>
        <Col className="whiteSideBar">
        </Col>
        <Col xl={8} lg={8} md={8} sm={12} xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bOrder">
            <h2 className="orderTitle">Enter Order Details</h2>
                <Col lg={{span:12,offset: 1}}>
                    <PlaceOrder />
                </Col>
            </div>
        </Col>
        <Col xl={3} lg={3} md={3} sm={12} xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bOrder2">
                
            </div>
        </Col>
        <Col className="whiteSideBar">
        </Col>  
    </Row>
</Container>
</div>
    );
}

export default Orderqty;