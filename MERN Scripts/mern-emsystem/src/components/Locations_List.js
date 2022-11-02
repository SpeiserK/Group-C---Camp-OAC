import React, { Component } from 'react';

export default class Locations_List extends Component {
    render(){
        return(
            <div className="Location-List">
                <label>
                    Select Pickup Location: 
                <select>
        <option value="West Kelowna">West Kelowna</option>
        <option value="Rutland">Rutland</option>
        <option value="Mission">Mission</option>
        <option value="Lake Country">Lake Country</option>
        <option value="Glenmore"> Glenmore </option>
        <option value="Kelowna Central"> Kelowna Central </option>
                </select>
                </label>
            </div>
        );
    };
};
    
