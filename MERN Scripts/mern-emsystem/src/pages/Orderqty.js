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
        <Col lg={9} md={10} sm={11} xs={11} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bOrder">
            <h2 className="orderTitle">Enter Order Details</h2>
                <Col lg={{span:12,offset: 1}}>
                    <PlaceOrder />
                </Col>
            </div>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bOrder2">
                
            </div>
        </Col>  
    </Row>
</Container>
</div>
    );
}

export default Orderqty;