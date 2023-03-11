import React, { Component } from 'react';
import { Link } from "react-router-dom";

import LocationSelect from './location/locationSelect';

export default class Empnav extends Component {
    render(){
        return(
            <div>
                <div className="empHeader">
                    <div className="adminTools">
                        <LocationSelect />
                    </div>
                </div>
            </div>
        );            
    }
}