import React from 'react';
import Banner from '../components/Banner.js';
import PlaceOrder from '../components/hooks/placeOrder.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container.js';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Bundles2 from '../components/Bundles2.js';

function Orderqty(){

    
   const renderTooltip = (props) => (
        <Tooltip id="hover-tooltip"{...props}>
            Contact info will be used solely for relaying pickup details and order receipt.
        </Tooltip>
    );
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
            <OverlayTrigger
            placement="bottom-start"
            delay={{show:250,hide:400}}
            overlay={renderTooltip}
            >
                <h2 className="orderTitle">Enter Order Details</h2>
            </OverlayTrigger>
                <Col lg={{span:12,offset: 1}}>
                    <PlaceOrder />
                </Col>
            </div>
        </Col>
        <Col xl={3} lg={3} md={3} sm={12} xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bOrder2">      
                <Bundles2 />    
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