import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';


export default class Footer extends Component {
    render(){
        return(
            <Container fluid style={{paddingRight: 0}}>
                <Row>
                    <div className="bFooter">
                        <h5 className="robotoSlab"><u>Rotary Contact Info</u></h5>
                    </div>  
                </Row>
                <Row>
                
                
                <Col xs={12} sm={12} md={3} lg={3} xl={3} style={{margin: 0, padding: 0}}>
                <div className="bFooterBlock">
                <p className="bFooterText">Email </p><p className="robotoSlab"> example@example.com</p>
                </div>
                </Col>
               
                <Col xs={12} sm={12} md={3} lg={3} xl={3} style={{margin: 0, padding: 0}}>
                <div className="bFooterBlock">
                <p className="bFooterText">Phone </p><p className="robotoSlab"> (XXX)-XXX-XXXX</p>
                </div>
                </Col>
             
                <Col xs={12} sm={12} md={3} lg={3} xl={3} style={{margin: 0, padding: 0}}>
                <div className="bFooterBlock">
                <p className="bFooterText">Fax </p><p className="robotoSlab"> (XXX)-XXX-XXXX</p>
                </div>
                </Col>
                
                <Col xs={12} sm={12} md={3} lg={3} xl={3} style={{margin: 0, padding: 0}}>
                <div className="bFooterBlock">
                <p className="bFooterText">Address </p><p className="robotoSlab"> 123 Example Road</p>
                </div>
                </Col>
                

                
                </Row>
            </Container>
        );            
    }
}