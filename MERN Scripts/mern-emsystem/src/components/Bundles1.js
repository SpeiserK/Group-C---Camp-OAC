import React, { Component } from 'react';
import Bundle1 from './/pictures/Bundle1.jpg';

export default class Bundles1 extends Component {
    render(){
        return(
            <div className="bundles1">
                <img alt="bundles1img" src={Bundle1} />
            </div>
        );            
    }
}