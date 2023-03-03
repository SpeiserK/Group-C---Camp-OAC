import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './Logo.js';
import Logo2 from './Logo2.js';
import Drop from './Dropdown.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default class Banner extends Component {
    render(){
        return(
            <Container fluid>
                    <div className="bHeader">
                    <Col lg={3} sm={2} className="d-none d-lg-block d-md-block"><Logo2 fluid /></Col>
                    <Col><Link to="/" className="Link" style={{textDecoration: 'none', padding: 20 }}><h1 className="bearHug">rotary club of kelowna ogopogo</h1></Link> </Col>
                    <Col lg={1}><Drop/></Col>
                    <Col xl={{span:2, offset:0}} lg={{span:2,offset:0}}  md={{span:1,offset:0}} sm={{span:1,offset:0}} className="d-none d-lg-block d-md-block">
                        <div className="bHeadicons">
                            <Logo fluid/>
                         </div>
                    </Col>
                </div>  
            </Container>
        );            
    }
}