import React, { Component } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export default class Dropdown extends Component {
    render(){
        return(
                <div className="dropdown">
                    <button className="dropbtn"><FontAwesomeIcon icon={faBars} size="4x" /></button>
                    <div className="dropdown-content">
                        <Link to="/about">About</Link>
                        <a href="https://www.facebook.com/ogopogorotary/" target="_blank" className="link1">Facebook</a>
                        <a href="https://portal.clubrunner.ca/824" target="_blank" className="link3">Kelowna Rotary</a>
                        <a href="https://www.campoac.com" target="_blank" className="link2">Camp OAC</a>
                    </div>
                </div>
        );
    }
}