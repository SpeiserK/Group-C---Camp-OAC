import React, { Component } from 'react';
import FirewoodTeam from './/pictures/FirewoodTeam.jpg';

export default class FirewoodTeaming extends Component {
    render(){
        return(
            <div className="firewoodTeam">
                <img alt="firewoodteam" src={FirewoodTeam} />
            </div>
        );            
    }
}