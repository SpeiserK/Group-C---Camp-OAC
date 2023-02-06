import React, { Component } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


/*TODO make dropdown display body on hover*/


export default class Drop extends Component {
    render(){
        return(
            
                <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
            <FontAwesomeIcon icon={faBars} size="4x" />
            </Dropdown.Toggle>
      
            <Dropdown.Menu>
              <Dropdown.Item href="/about">About</Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/ogopogorotary/">Facebook</Dropdown.Item>
              <Dropdown.Item href="https://portal.clubrunner.ca/824">Kelowna Rotary</Dropdown.Item>
              <Dropdown.Item href="https://portal.clubrunner.ca/824">Camp OAC</Dropdown.Item>
            </Dropdown.Menu>
                </Dropdown>
            
                
               
        );
    }
}
