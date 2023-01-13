import React, { Component } from 'react';
import CampLog from './/pictures/Camp-OAC-Logo-Secondary.png';

export default class CampLogo extends Component {
    render(){
        return(
            <div className="campLogo">
                <img alt="teamLogo" src={CampLog} />
            </div>
        );            
    }
}