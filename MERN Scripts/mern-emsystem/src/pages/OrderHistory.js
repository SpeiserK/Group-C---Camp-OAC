import React from 'react'
import Empbanner from '../components/Empbanner.js';
import OrderDispHist from '../components/OrderDispHist.js'
import Container from 'react-bootstrap/esm/Container.js';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function OrderHistory(){

var phoneData = "";
var emailData = "";
if(sessionStorage.getItem("searchNum")!=null){
    phoneData = sessionStorage.getItem("searchNum");
}
if(sessionStorage.getItem("searchEmail")!=null){
    emailData = sessionStorage.getItem("searchEmail");
}
var dateData = -1;
var locData = 0;
var statData = 0;
if(sessionStorage.getItem("dateKey")!=null){
    dateData = sessionStorage.getItem("dateKey");
}
if(sessionStorage.getItem("locKey")!=null){
    locData = sessionStorage.getItem("locKey");
}
if(sessionStorage.getItem("statKey")!=null){
    statData = sessionStorage.getItem("statKey");
}
    
const handleSort = (e) => {
    var i;
    var j;
    var k;
    if(e.target.value == 0){
        i = -1;
        j = 0;
        k = 0;
    }else if(e.target.value == 1){
        i = -1;
        j = 1;
        k = 0;
    }else if(e.target.value == 2){
        i = 1;
        j = 1;
        k = 0;
    }else if(e.target.value == 3){
        i = -1;
        j = 0;
        k = -1;
    }else if(e.target.value == 4){
        i = 1;
        j = 0;
        k = -1;
    }else if(e.target.value == 5){
        i = 1;
        j = 0;
        k = 0;
    }
    sessionStorage.setItem("dateKey",i);
    sessionStorage.setItem("locKey",j);
    sessionStorage.setItem("statKey",k);
    sessionStorage.setItem("labelKey",e.target.value);
    window.location.reload();
}

const handlePhone = () => {
    sessionStorage.setItem("searchNum",document.getElementById("phoneNum").value);
}

const handleEmail = () => {
    sessionStorage.setItem("searchEmail",document.getElementById("Vemail").value);
}

function handleReset() {
    sessionStorage.clear("searchNum");
    sessionStorage.clear("searchEmail");
}

function handleSubmit() {
    window.location.reload();
}

    return(
        <Container fluid className="bEmp">
            <Row style={{padding: 0}}>
                <Col style={{padding: 0}} >
                    <Empbanner />
                </Col>
            </Row>
            <Row align="center" style={{paddingTop: 10}}>
                <h2 className="robotoSlab">Order History</h2>
                 {/*Search Component or something here*/}
            </Row>
            <form onSubmit={(e) => handleSubmit()}> 
            <Row>
                <Col>
                </Col>
                <Col align="right">
                    <Form.Control type="text" id="phoneNum" placeholder={sessionStorage.getItem("searchNum")} onChange={handlePhone}/>
                </Col>  
                <Col align="right">
                    <Form.Control type="text" id="Vemail" placeholder={sessionStorage.getItem("searchEmail")} onChange={handleEmail}/>
                </Col>
                <Col align="left">
                    <Button type="submit">Search</Button>
                    &nbsp;
                    &nbsp;
                    <Button type="button" variant="danger">Clear</Button>
                </Col>
            </Row>
            <Row style={{paddingTop: 20,paddingRight: 40}}>
                <Form.Select onChange={handleSort} value={sessionStorage.getItem("labelKey")} size="sm" id="sort-selector" aria-lavel="sortSelector">
                    <option value="0">Newest</option>
                    <option value="5">Oldest</option>
                    <option value="1">Location (New)</option>
                    <option value="2">Location (Old)</option>
                    <option value="3">Status (New)</option>
                    <option value="4">Status (Old)</option>                     
                </Form.Select>
            </Row>
            </form>
            <Row style={{padding: 30}}>
                <Col>
                <OrderDispHist phonNum={phoneData} email={emailData} queryDate={dateData} queryLoc={locData} queryStat={statData}/>
                </Col>
            </Row>
        </Container>
    );
}
export default OrderHistory;