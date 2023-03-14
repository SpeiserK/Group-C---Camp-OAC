import React from 'react'
import Empbanner from '../components/Empbanner.js';
import OrderDispHist from '../components/OrderDispHist.js'
import Container from 'react-bootstrap/esm/Container.js';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LocationSelect from '../components/location/locationSelect.js';

function OrderHistory(){
var phoneData = "";
var emailData = "";
var locData = "";
if(sessionStorage.getItem("searchNum")!==null){
    phoneData = sessionStorage.getItem("searchNum");
}
if(sessionStorage.getItem("searchEmail")!==null){
    emailData = sessionStorage.getItem("searchEmail");
}
if(sessionStorage.getItem('selectedLocation')!==null){
    locData = sessionStorage.getItem('selectedLocation');
}

var dateData = -1;
var statData = 0;
if(sessionStorage.getItem("dateKey")!==null){
    dateData = sessionStorage.getItem("dateKey");
}
if(sessionStorage.getItem("statKey")!==null){
    statData = sessionStorage.getItem("statKey");
}
    
const handleSort = (e) => {
    var i;
    var k;
    if(e.target.value == 0){
        i = -1;
        k = 0;
    }else if(e.target.value == 1){
        i = 1;
        k = 0;
    }else if(e.target.value == 2){
        i = 1;
        k = -1;
    }
    sessionStorage.setItem("dateKey",i);
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
    sessionStorage.removeItem("searchNum");
    sessionStorage.removeItem("searchEmail");
    sessionStorage.removeItem('selectedLocation');
    handleSubmit();
}

function handleSubmit() {
    if(document.getElementById("Vemail").value===""){
        sessionStorage.removeItem("searchEmail");
    }
    if(document.getElementById("phoneNum").value===""){
        sessionStorage.removeItem("searchNum");
    }
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
                    <Form.Control type="text" id="phoneNum" onChange={handlePhone} placeholder="Search by Phone #"/>
                </Col>  
                <Col align="right">
                    <Form.Control type="text" id="Vemail"  onChange={handleEmail} placeholder="Search by Email"/>
                </Col>
                <Col align="left">
                    <Button type="submit">Search</Button>
                    &nbsp;
                    &nbsp;
                    <Button type="button" variant="danger" onClick={handleReset}>Clear</Button>
                </Col>
            </Row>
            <Row style={{paddingTop: 20,paddingRight: 40}}>
                <Col xl={{span:6,offset:0}} style={{paddingLeft: 40}}>
                { phoneData !== "" && emailData === "" ?(
                    <h4 className="robotoSlab">Showing Results for Phone #:&emsp;{phoneData}</h4>
                    ): (<></>)
                }
                { phoneData === "" && emailData!== "" ?(
                    <h4 className="robotoSlab">Showing Results for Email:&emsp;{emailData}</h4>
                    ): (<></>)
                }
                { phoneData !== "" && emailData !== "" ?(
                    <h4 className="robotoSlab">Showing Results for Phone #:&emsp;{phoneData}&emsp; Email:&emsp; {emailData}</h4>
                    ): (<></>)
                }
                {  phoneData === "" && emailData === "" ?(
                    <h4 className="robotoSlab">Showing All Results</h4>
                    ): (<></>)
                }
                {  locData !== "" ?(
                    <h4 className="robotoSlab"> in {locData}</h4>
                    ): (<></>)
                }

                </Col>
                <Col xl={{span: 1,offset:0}}>
                <LocationSelect/>
                </Col>
                <Col xl={{span: 4,offset:0}}>
                <Form.Select onChange={handleSort} value={sessionStorage.getItem("labelKey")} size="sm" id="sort-selector">
                    <option value="0">Newest</option>
                    <option value="1">Oldest</option>
                    <option value="2">Status </option>                     
                </Form.Select>
                </Col>  
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