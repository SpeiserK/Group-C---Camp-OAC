import React from 'react'
import OrderLiveDisp from '../components/OrderLiveDisp.js';
import LocationLiveDisp from '../components/LocationLiveDisp.js';
import Empnav from '../components/Empnav.js';
import Empbanner from '../components/Empbanner.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const empLocation = sessionStorage.getItem('selectedLocation');

function Emp(){
    return(
        <Container fluid style={{ padding: 0 }}>
            <Row style={{padding: 0}}>
                <Col style={{padding: 0}} >
                    <Empbanner />
                </Col>
            </Row>
            <Row>
                <Col>
                <Empnav />
                </Col>
            </Row>
            <Row style={{padding: 10}}>
                <Col>
                <Row align="center">
                <h2 className="robotoSlab">{empLocation}</h2>
                <LocationLiveDisp queryLoc={empLocation} />
                </Row>
                <Row  style={{padding: 10, marginTop: 10}}>
                <h4 className="robotoSlab">Orders that need pickup</h4>
                 <OrderLiveDisp query1={'Approved'} queryLoc={empLocation} />
                 </Row>
                 <Row  style={{padding: 10, marginTop: 10}}>
                 <h4 className="robotoSlab">Orders that need approval/denial</h4>
                 <OrderLiveDisp query1={'Pending'} queryLoc={empLocation} />
                 </Row>
                 </Col>
            </Row>
        </Container>
    );
}
export default Emp;