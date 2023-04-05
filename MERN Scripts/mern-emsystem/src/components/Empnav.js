/*
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
*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import LocationSelect from './location/locationSelect';

export default class Empnav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            adminLocAccess: sessionStorage.getItem('adminLocAccess')
        };
    }

    render(){

        const { adminLocAccess } = this.state;

        return(
            <div>
                { adminLocAccess === 'admin' ? (
                    <div className="empHeader">
                        <div className="adminTools">
                            <LocationSelect />
                            <Button variant="info" href="/emp/instructions">How to Use</Button>
                        </div>
                    </div>
                ) : null }
            </div>
        );            
    }
}