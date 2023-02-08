import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './Logo.js';
import Logo2 from './Logo2.js';
import Drop from './Dropdown.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Banner extends Component {
    render(){
        return(
            <Container>
                    <div className="bHeader">
                    <Col lg={3} sm={2}><Logo2 fluid /></Col>
                    <Col><Link to="/" className="Link" style={{textDecoration: 'none', padding: 20 }}><h1 className="bearHug">rotary club of kelowna ogopogo</h1></Link> </Col>
                    <Col lg={1}><Drop/></Col>
                    <Col xl={1} lg={{span:2, offset: 1}}>
                        <div className="bHeadicons">
                            <Logo fluid/>
                         </div>
                    </Col>
                </div>  
            </Container>
        );            
    }
}