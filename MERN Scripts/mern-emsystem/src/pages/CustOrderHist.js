import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Banner from '../components/Banner.js';
import Row from 'react-bootstrap/esm/Row.js';
import Container from 'react-bootstrap/esm/Container.js';
import Col from 'react-bootstrap/esm/Col.js';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button.js';
import cabin from '../components/pictures/Camp-OAC-Logo_Cabin.png';
import CustomerHistory from '../components/customerSide/CustomerHistory.js';

function CustOrderHist (){

//const navigate = useNavigate();
var sortLabel ="";
var number = "";
var data;
if(sessionStorage.getItem("pNum") != null){
   data = sessionStorage.getItem("pNum")
}else{
   data =  sessionStorage.getItem("phoneNumber");
}


var sort = -1;
if(sessionStorage.getItem("sortKey") != null){
    sort = sessionStorage.getItem("sortKey");
}
var msg = "";
var table = true;
if(data==null){
    table = false;
    msg = "Enter Phone Number to see order history";
}else{
    msg = "Showing orders for : " + data;
}
const [open] = useState(table);

const handleClick = () => {
    number = document.getElementById("phoneNum").value;
    sessionStorage.setItem("pNum",number);
}

const handleReload = () => {
    window.location.reload();
}

const handleLeave = () => {
    sessionStorage.removeItem("pNum");
    sessionStorage.removeItem("sortKey");
}

const handleSort = (e) => {
    var i;
    if(e.target.value == 2){
        i = -1;
    }else{
        i = e.target.value;
    }
    sessionStorage.setItem("sortKey",i);
    handleReload();
}

    return(
        <div className="bContainer">
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
            <Banner /> 
            </Row>
            <Row>
            <Col className="whiteSideBar"></Col> 
            <Col xl={9} lg={9} md={9} sm={12} xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <div className="bOrder">
                    <Row>
                        <Col className="custBox" align="center">
                            <Row>
                                <Col>
                                    <p id="topMsg" className="robotoSlab">{msg}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Control type="text" id="phoneNum" placeholder="Phone Number" onChange={handleClick}/>
                            </Row>
                            <br></br>             
                                <Button 
                                    onClick={handleReload}
                                    aria-controls="collapse-table"
                                    aria-expanded={open}
                                >See Orders
                                </Button>
                                <Row>
                                <Col>
                                <Collapse in={open}>
                                    <div id="collapse-table">
                                    <Form.Select onChange={handleSort}  value={sessionStorage.getItem("sortKey")} size="sm" id="sort-selector" aria-lavel="sortSelector">
                                       {/* <option disabled selected>Sort by:</option>*/}
                                        <option value="2">Newest</option>
                                        <option value="1">Oldest</option>
                                        
                                    </Form.Select>
                                    </div>
                                </Collapse>
                                </Col>
                                </Row>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col>
                      <Collapse in={open} onEnter={handleClick}>
                      {  data !== "" && data!==null ?(
                         <div id="collapse-table">
                            <CustomerHistory query1={data} query2={sort}/>
                         </div>
                            ): (<></>)
                        }
                      </Collapse>

                      </Col>
                    </Row> 
                    <Row>
                        <Col>                       
                            <div className="smallSideBox">
                                <img src={cabin} alt="cabin" height="30%" width="40%"></img>
                            </div>
                        </Col>
                    </Row>  
                </div>
            </Col>
            <Col xl={2} lg={2} md={2} sm={12} xs={12} style={{ paddingLeft: 0, paddingRight: 0 }} align="center">
                <div className="bOrder2">
                <Button variant="outline-dark" size="lg" href="/" onClick={handleLeave} style={{border: 0, marginLeft: 18}}>Return Home</Button>{' '}
                </div>
            </Col>  
            <Col className="whiteSideBar"></Col> 
        </Row>
    </Container>
    </div>
    );
}

export default CustOrderHist;