import React, { Component } from 'react';
import logo from './pictures/image2vector.svg';

export default class Logo extends Component {
    render(){
        return(
            <div className="logoimg">
                <img alt="campOAClogo" src={logo} height="100px" width="160px"/>
            </div>
        );            
    }
}