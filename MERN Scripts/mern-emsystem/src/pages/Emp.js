import React from 'react'
import OrderLiveDisp from '../components/OrderLiveDisp.js';
import LocationLiveDisp from '../components/LocationLiveDisp.js';
import Empnav from '../components/Empnav.js';
import Empbanner from '../components/Empbanner.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const empLocation = localStorage.getItem('selectedLocation');

function Emp(){
    return(
    <div className="appMain">
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
                <div className="appHeader">
                    <Empbanner />
                    <Empnav />
                </div>
            </Row>
            <Row>
        <body className="appContainer">
            <div className="empLeftDiv"> 
                <LocationLiveDisp queryLoc={empLocation} />
                <h2>Orders that need pickup</h2>
                 <OrderLiveDisp query1={'Approved'} queryLoc={empLocation} />
                 <h2>Orders that need approval/denial</h2>
                 <OrderLiveDisp query1={'Pending'} queryLoc={empLocation} />
            </div>
        </body>
            </Row>
        </Container>
    </div>
    );
}
export default Emp;