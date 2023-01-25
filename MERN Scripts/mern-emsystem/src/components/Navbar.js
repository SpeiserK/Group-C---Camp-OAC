import React, { Component } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { text } from '@fortawesome/fontawesome-svg-core';
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CampName from './CampName';

export default class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          online: ''
        };
      }

    
      componentDidMount(){
        axios.get(`http://localhost:5000/`)
      .then(res => {
        const data = res.data;
        this.setState({ online: data });
      })
      .catch(err => {
        console.log(err);
      })
      }


    render(){
        return(
          <div className="mainNav">
              <div className="leftNav">

              </div>
              <div className="centerNav">
                <CampName />
                &nbsp;
                &nbsp;
                <FontAwesomeIcon icon={faX} color="white"/>
                &nbsp;
                &nbsp;
                <h4 className="rotaryFont">ROTARY</h4>
              </div>
              <div className="rightNav">
                  {this.state.online.message}
                  <button style={{textDecoration: 'none' , color: 'black', fontSize: '14px',marginTop: '10px'}}>
                  <Link to="/login" style={{textDecoration: 'none' }}>Admin Portal</Link>
                  </button>
                  <button style={{textDecoration: 'none' , color: 'black', fontSize: '14px',marginTop: '10px'}}>
                  <Link to="/login/Emp" style={{textDecoration: 'none' }}>Admin Dash</Link>
                  </button>
              </div>
          </div>
        );            
    }
}