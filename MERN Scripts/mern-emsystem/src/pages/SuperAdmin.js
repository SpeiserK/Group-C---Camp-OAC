import React from 'react'
import Empbanner from '../components/Empbanner.js';
import Empnav from '../components/Empnav.js';
import EmployeeLiveDisp from '../components/EmployeeLiveDisp';
import EmployeeCreation from '../components/Signup/EmpSignup';
import LocationManagement from '../components/LocationManagement';
import NewLocation from '../components/location/newLocation.js';
import Container from 'react-bootstrap/esm/Container.js';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';

function SuperAdmin(){
    return(

        <Container fluid className="bEmp">
            <Row style={{padding: 0, margin: 0}}>
                <Col style={{padding: 0}} >
                    <Empbanner />
                </Col>
            </Row>
            <Row>
                {/*Search Component or something*/}
            </Row>
            <Row style={{paddingTop: 20, margin: 0}}>
                <Row className="adminPanel">
                <h2 className="robotoSlab"> Rotarian Volunteer List</h2>
                        <Col>
                            <EmployeeCreation />
                            <br></br>
                            <EmployeeLiveDisp />
                        </Col>
                </Row>
                <hr></hr>
                <Row className="locationPanel">
                        <h2 className="robotoSlab"> Location List</h2>
                        <Col lg>
                            <p className="robotoSlab"> Add new Location</p>
                            <NewLocation />
                            <br></br>
                            <LocationManagement />
                        </Col>
                </Row>
            </Row>
        </Container>
    );
}
export default SuperAdmin;