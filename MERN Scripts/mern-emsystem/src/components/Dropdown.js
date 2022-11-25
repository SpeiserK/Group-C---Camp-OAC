import React, { Component } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Dropdown extends Component {
    render(){
        return(
            <div className="dropdown">
                <button className="dropbtn"><FontAwesomeIcon icon={faBars} size="4x" /></button>
                <div className="dropdown-content">
                    <a href="https://www.facebook.com/ogopogorotary/" className="link1">Facebook</a>
                    <a href="#" className="link2">About</a>
                    <a href="https://portal.clubrunner.ca/824" className="link3">Ogopogo Website</a>
                </div>
             
            </div>
        );
    }
}