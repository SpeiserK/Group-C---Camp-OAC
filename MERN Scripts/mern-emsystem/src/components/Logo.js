import React, { Component } from 'react';
import logo from './image2vector.svg';

export default class Logo extends Component {
    render(){
        return(
            <div className="logoimg">
                <img alt="campOAClogo" src={logo} />
            </div>
        );            
    }
}