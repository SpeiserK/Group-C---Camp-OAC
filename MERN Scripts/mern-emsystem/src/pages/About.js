import { Link } from "react-router-dom";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from '../components/Banner.js';


function About(){
    
    return(
    <div className="bContainer">
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
                <div className="bHeader">
                    <Banner />
                </div>  
            </Row>
            <Row>
                <Col lg={8} md={9} sm={12} xs={12}>
                    <div className="bMain">
                        <h1 className="robotoSlab">About</h1><br></br>
                            <h3 className="robotoSlab">Rotary Club of Kelowna Ogopogo is an inclusive Club where we build friendships and raise money for local and international projects.  We are like minded people who want to give back by donating time and/or money for great local and international service projects and organizations focussing on youth and family.</h3>
                            <p className="robotoSlab">If you would like more information about our club, click <a href="https://portal.clubrunner.ca/824">here </a></p><br></br>
                            <h3 className="robotoSlab">Camp OAC is a children’s summer camp located just north of Kelowna on Okanagan Lake.  Summer camps have been attended by thousands of campers since 1950.  In the offseason, the property is available for rent.  For more information click <a href="https://www.campoac.com">here</a></h3>
                            <br/><br/>
                            <p className="robotoSlab">Click <a href="/">here</a> to get started. Enter your email and follow the steps to place your order!</p><br></br>
                    </div>
                    <div className="bMain2">
        
                    </div>
                </Col>   
                <Col lg={4} md={3} sm={12} xs={12}>
                    <div className="bSide">
                        <Row><div className="bSidebar1"></div></Row>
                        <Row><div className="bSidebar2"></div></Row>
                        <Row><div className="bSidebar3"></div></Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default About;