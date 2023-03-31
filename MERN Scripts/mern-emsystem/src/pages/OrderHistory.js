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
var statusData = "";
if(sessionStorage.getItem("searchNum")!==null){
    phoneData = sessionStorage.getItem("searchNum");
}
if(sessionStorage.getItem("searchEmail")!==null){
    emailData = sessionStorage.getItem("searchEmail");
}
if(sessionStorage.getItem('selectedLocation')!=="All"){
    locData = sessionStorage.getItem('selectedLocation');
}
if(sessionStorage.getItem("statusKey")!==null){
    statusData = sessionStorage.getItem("statusKey");
}

var dateData = -1;
if(sessionStorage.getItem("dateKey")!==null){
    dateData = sessionStorage.getItem("dateKey");
}

    
const handleSort = (e) => {
    var i;
    if(e.target.value == 0){
        i = -1;
    }else if(e.target.value == 1){
        i = 1;
    } 
    sessionStorage.setItem("dateKey",i);
    sessionStorage.setItem("labelKey",e.target.value);
    window.location.reload();
}

const handleStatus = (e) => {
    if(e.target.value == 0){
        sessionStorage.setItem("statusKey","");
    }else if(e.target.value == 1){
        sessionStorage.setItem("statusKey","Approved");
    }else if(e.target.value == 2){
        sessionStorage.setItem("statusKey","Denied");
    }else if(e.target.value == 3){
        sessionStorage.setItem("statusKey","Pending");
    }
    sessionStorage.setItem("statusLabel",e.target.value);
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
    sessionStorage.removeItem("statusKey");
    sessionStorage.setItem("statusLabel",0);
    sessionStorage.setItem('selectedLocation',"All");
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
            <Row style={{padding: 0, margin: 0}}>
                <Col style={{padding: 0}} >
                    <Empbanner />
                </Col>
            </Row>
            <Row align="center" style={{paddingTop: 10, margin: 0}}>
                <h2 className="robotoSlab">Order History</h2>
                 {/*Search Component or something here*/}
            </Row>
            <form onSubmit={(e) => handleSubmit()}> 
            <Row style={{margin: 0}}>
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
            <Row style={{paddingTop: 20,paddingRight: 40, margin: 0}}>
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
                <Col  style={{paddingTop: 20, paddingLeft: 100}} xl={{span: 6,offset:0}}>
                    <Row>
                        <Col align="left">
                            <Form.Select onChange={handleStatus} value={sessionStorage.getItem("statusLabel")} size="md" id="sort-selector2">
                                <option value="0">Status: All</option>
                                <option value="1">Status: Approved</option>
                                <option value="2">Status: Denied</option>       
                                <option value="3">Status: Pending</option>               
                            </Form.Select>
                        </Col>
                        <Col align="center">
                            <LocationSelect/>
                        </Col>
                        <Col align="left">
                        <Form.Select onChange={handleSort} value={sessionStorage.getItem("labelKey")} size="md" id="sort-selector2">
                            <option value="0">Newest</option>
                            <option value="1">Oldest</option>                   
                        </Form.Select>
                        </Col>
                    </Row>
                </Col>  
            </Row>
            </form>
            <Row style={{padding: 30, margin: 0}}>
                <Col style={{margin: 0}}>
                <OrderDispHist phonNum={phoneData} email={emailData} queryDate={dateData} queryLoc={locData} queryStat={statusData}/>
                </Col>
            </Row>
        </Container>
    );
}
export default OrderHistory;