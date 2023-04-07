import React from 'react'
import OrderLiveDisp from '../components/OrderLiveDisp.js';
import LocationLiveDisp from '../components/LocationLiveDisp.js';
import Empnav from '../components/Empnav.js';
import Empbanner from '../components/Empbanner.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";



// main employee page
    


function Emp(){

    var empLocation = sessionStorage.getItem("selectedLocation");
    var adminLocAccess = sessionStorage.getItem("adminLocAccess");



    const [query1, setQuery1] = useState(sessionStorage.getItem("currentLiveQuery"));
    if(query1==null){
        setQuery1("Approved");
    }
    var phoneData = "";
    if(sessionStorage.getItem("searchNum")!==null){
        phoneData = sessionStorage.getItem("searchNum");
    }
  
    const handleApprovedClick = () => {
      setQuery1("Approved");
      sessionStorage.setItem("currentLiveQuery", "Approved");
      window.location.reload();
    };
  
    const handlePendingClick = () => {
      setQuery1("Pending");
      sessionStorage.setItem("currentLiveQuery", "Pending");
      window.location.reload();
    };

    function handleSubmit() {
        if(document.getElementById("phoneNum").value===""){
            sessionStorage.removeItem("searchNum");
        }
        window.location.reload();
    };

    function handleReset() {
        sessionStorage.removeItem("searchNum");
        handleSubmit();
    }

    const handlePhone = () => {
        sessionStorage.setItem("searchNum",document.getElementById("phoneNum").value);
    };

    return(
        <Container fluid className="bEmp">
            <Row style={{padding: 0, margin: 0}}>
                <Col style={{padding: 0}} >
                    <Empbanner />
                </Col>
            </Row>
            <Row style={{paddingRight: 0, marginRight: 0}}>
                <Col style={{margin: 0, padding: 0}}>
                <Empnav />

                </Col>
            </Row>
            <Row style={{padding: 20, margin: 0}}>
                <Col>
                <Row>
                <h1 className="robotoSlab" align="center">Live Orders For {empLocation}</h1>
                <br></br>

                <LocationLiveDisp queryLoc={empLocation} />
                </Row >
                <Row style={{margin: 0}}>
                    <Col align="center">
                        <div className='liveOrderButtons'>
                            <button className={`viewOrders ${query1 === 'Approved' ? 'selected' : ''}`} onClick={handleApprovedClick}>Orders that need pickup</button>
                            <button className={`viewOrders ${query1 === 'Pending' ? 'selected' : ''}`} onClick={handlePendingClick}>Orders that need approval</button>
                        </div>
                    </Col>
                    <Col align="right">
                        <form onSubmit={(e) => handleSubmit()}> 
                            <Form.Control type="text" id="phoneNum" onChange={handlePhone} placeholder="Search by Phone #" className="liveorderPhone"/>
                        {  phoneData !== "" ?(
                            <div className="phoneSearchBox">
                                <p className="robotoSlab">Searching for : {phoneData}</p>
                                <Button type="button" variant="danger" size="sm" onClick={handleReset}>Clear</Button>
                            </div>
                            ): (<></>)
                        }
                        </form>
                    </Col>
                </Row>
                <Row style={{margin: 0}}>
                    <Col style={{ padding: 10, marginTop: 10 }}>
                        
                     <OrderLiveDisp query1={query1} queryLoc={empLocation} queryPhone={phoneData} />
                    </Col>
                    {/* 
                    <Col style={{padding: 10, marginTop: 10, overflow: "scroll", height:"30em" }}>
                <h4 className="robotoSlab">Orders that need pickup</h4>
                 <OrderLiveDisp query1={'Approved'} queryLoc={empLocation} />
                    </Col>
                    <Col style={{padding: 10, marginTop: 10, overflow: "scroll", height:"30em" }}>
                 <h4 className="robotoSlab">Orders that need approval/denial</h4>
                 <OrderLiveDisp query1={'Pending'} queryLoc={empLocation} />
                    </Col>
                    */}
                 </Row>
                 </Col>
            </Row>
        </Container>
    );
}
export default Emp;