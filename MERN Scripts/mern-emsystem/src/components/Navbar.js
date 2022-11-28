import React, { Component } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { text } from '@fortawesome/fontawesome-svg-core';

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
                {this.state.online.message}
                <button style={{textDecoration: 'none' , color: 'black'}}>
                <Link to="/login" style={{textDecoration: 'none' }}>Admin Portal</Link>
                </button>
            </div>
        );            
    }
}