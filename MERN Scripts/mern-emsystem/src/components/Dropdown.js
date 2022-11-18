import React, { Component } from 'react';

export default class Dropdown extends Component {
    render(){
        return(
            <div className="dropdown">
                <button className="dropbtn">Drop me</button>
                <div className="dropdown-content">
                    <a href="#">Link1</a>
                    <a href="#">Link2</a>
                    <a href="#">Link3</a>
                </div>
             
            </div>
        );
    }
}