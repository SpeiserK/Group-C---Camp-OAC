import React from 'react';
import Banner from '../components/Banner.js';
import EmpLogin from '../components/Login/EmpLogin.jsx';
import Row from 'react-bootstrap/esm/Row.js';
import Container from 'react-bootstrap/esm/Container.js';
import PwReset from '../components/Login/PwReset'
import PasswordChangeForm from '../components/passwordReset/PasswordChangeForm';


/* component that resets passwords */
function ResetPassword(){
    return( 
    <div className="bContainer">
       <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
            <Banner /> 
            </Row>
            <Row className="text-center">

            <PasswordChangeForm />

            </Row>
        </Container>
    </div>
    );
}

        

export default ResetPassword;