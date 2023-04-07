import { useNavigate } from "react-router-dom";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FireAnimation from "../components/FireAnimation";
import FireAnimationRight from "../components/FireAnimationRight";
import Button from 'react-bootstrap/Button';
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";


/* HOMEPAGE */

function Startpage(){
    const gotoOrder = useNavigate();

    function handleClick(){
        gotoOrder("order");
    }
    return(
    <div className="bContainer">
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
            <Banner /> 
            </Row>
            <Row>
                <Col lg={8} md={9} sm={12} xs={12}>
                    <div className="bMain">
                        <h1 className="robotoSlab">Welcome</h1>
                            <br></br>
                            <p className="robotoSlab">The Rotary Club of Kelowna Ogopogo has partnered with Camp OAC to sell firewood.  100% of the proceeds from your purchase is split 50/50 between the two organizations.  To learn more about the organizations click the about button above.
                            </p><br></br>
                            <p className="robotoSlab">To order your firewood, use the order button below.</p>
                    </div>
                    <div className="bMainFill">

                    </div>
                    <div>
                        <Col className="d-none d-xl-block">
                            <FireAnimation />
                        </Col>
                    </div>
                    <div className="bMain2">
                        <Col xl={{ span: 5, offset: 6 }} md={{ span: 5, offset: 5 }} xs={{span: 5, offset: 5}}>             
                                <Button variant="start" onClick={() => handleClick()}>ORDER</Button>{' '} 
                        </Col>
                    </div>
                    <div>
                      
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
            <Row style={{marginLeft: 10, marginRight: 25, marginBottom: 20}}>
                <Footer />
            </Row>
        </Container>
    </div>
    );
}

export default Startpage;