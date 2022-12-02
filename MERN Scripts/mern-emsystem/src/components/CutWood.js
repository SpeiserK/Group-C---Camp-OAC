import React, { Component } from 'react';
import CuttingWood from './/pictures/CuttingWood.jpeg';

export default class CutWood extends Component {
    render(){
        return(
            <div className="cutWood">
                <img alt="CutWood" src={CuttingWood} />
            </div>
        );            
    }
}