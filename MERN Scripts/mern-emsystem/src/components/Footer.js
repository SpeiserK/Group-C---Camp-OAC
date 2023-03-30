import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';


export default class Footer extends Component {
    render(){
        return(
            <Container fluid style={{paddingRight: 0}}>
                <div className="bFooter">
                <p className="robotoSlab"><u>Rotary Contact Info</u></p>
                </div>  
                <div className="bFooterBlock">
                <p className="robotoSlab">Email: </p>
                &emsp;
                <p className="robotoSlab">Phone: </p>
                &emsp;
                <p className="robotoSlab">Fax: </p>
                &emsp;
                <p className="robotoSlab">Address: </p>
                &emsp;

                </div>
            </Container>
        );            
    }
}