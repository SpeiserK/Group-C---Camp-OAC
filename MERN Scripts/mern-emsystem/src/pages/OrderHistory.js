import React from 'react'
import Empbanner from '../components/Empbanner.js';
import OrderDispHist from '../components/OrderDispHist.js'
import Container from 'react-bootstrap/esm/Container.js';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';

function OrderHistory(){
    

    return(
        <Container fluid className="bEmp">
            <Row style={{padding: 0}}>
                <Col style={{padding: 0}} >
                    <Empbanner />
                </Col>
            </Row>
            <Row>
                {/*Search Component or something*/}
            </Row>
            <Row style={{padding: 30}}>
                <Col>
                <OrderDispHist />
                </Col>
            </Row>
        </Container>
    );
}
export default OrderHistory;