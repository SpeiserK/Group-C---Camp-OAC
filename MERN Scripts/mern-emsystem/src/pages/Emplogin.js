import React from 'react';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner.js';
import EmpLogin from '../components/Login/EmpLogin.jsx';
import Row from 'react-bootstrap/esm/Row.js';
import Container from 'react-bootstrap/esm/Container.js';
import PwReset from '../components/Login/PwReset'

function Emplogin(){
    return( 
    <div className="bContainer">
       <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
            <Banner /> 
            </Row>
            <Row className="text-center">
                
            <EmpLogin />
            
            </Row>
            <Row className="text-center">

            <Link to="/login/request-password-reset" >I forgot my password</Link>
            </Row>
        </Container>
    </div>
    );
}

        

export default Emplogin;