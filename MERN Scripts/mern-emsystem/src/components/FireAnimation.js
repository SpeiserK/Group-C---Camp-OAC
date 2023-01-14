import React, { Component } from 'react';
import CampLog from './/pictures/Camp-OAC-Logo-Secondary.png';

export default class FireAnimation extends Component {
    render(){
        return(
            <div class = "fire-container">
                    <div class = "flame" id = "flame-2"></div>
                    <div class = "flame" id = "flame-1"></div>
                    <div class = "flame" id = "flame-3"></div>
                    <div class = "small-element" id = "small-element-1"></div>
                    <div class = "small-element" id = "small-element-2"></div>
                    <div class = "fire-bottom">
                    <div class = "main-fire"></div>
                    </div>
                    <div class = "wood" id = "wood-1"></div>
                    <div class = "wood" id = "wood-2"></div>
                </div>
        );            
    }
}