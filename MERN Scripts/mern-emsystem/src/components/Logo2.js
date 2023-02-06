import React, { Component } from 'react';
import oac from './pictures/Camp-OAC-Logo-Primary.png';

export default class Logo2 extends Component {
    render(){
        return(
            <div className="logoimg">
                <img alt="campOAClogo2" src={oac} height="90px" width="90px"/>
            </div>
        );            
    }
}