import React from 'react';

import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';

import Banner from '../components/Banner.js';

import PlaceOrder from '../components/hooks/placeOrder.js';
import OurProgBar from '../components/OurProgBar.js';
import Bundles2 from '../components/Bundles2.js';
import CampLogo from '../components/CampLogo.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container.js';




import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Orderqty(){
    return( 
        
         <div>  
            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row>
            <Banner />
                </Row>
                <Row>
            
            <body className="appContainer">
                
                <div className="updateLeft">
                    
                    <h2 className="orderTitle">Enter Order Details</h2>
                    <PlaceOrder />
                    
                   
                 </div>
            </body>
            
            </Row>
            
            </Container>
        </div>
    );
}

export default Orderqty;