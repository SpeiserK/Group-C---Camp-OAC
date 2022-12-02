import React, { Component } from 'react';
import Wood from './/pictures/Wood.jpg';

export default class Woodimg extends Component {
    render(){
        return(
            <div className="woodimg">
                <img alt="Woodimg" src={Wood} />
            </div>
        );            
    }
}