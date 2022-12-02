import React, { Component } from 'react';
import EmpTools from './EmpTools';
import { Link } from "react-router-dom";

export default class Empnav extends Component {
    render(){
        return(
            <div>
                <div className="empHeader">
                   <EmpTools />
                </div>
            </div>
        );            
    }
}