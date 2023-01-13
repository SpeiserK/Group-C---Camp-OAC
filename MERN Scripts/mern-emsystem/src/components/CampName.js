import React, { Component } from 'react';
import CampNam from './/pictures/Camp-OAC-Logo_WordMark-Light.png';

export default class CampName extends Component {
    render(){
        return(
            <div className="campName">
                <img alt="teamName" src={CampNam} />
            </div>
        );            
    }
}