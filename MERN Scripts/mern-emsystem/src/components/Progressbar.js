import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


const progress = localStorage.getItem("progress");

export default class Progressbar extends Component {
    render(){
        return(
            <div className="progBar">
                 <ProgressBar now={20} />;
            </div>
        );            
    }
}