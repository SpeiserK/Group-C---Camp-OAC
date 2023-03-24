import React, { Component } from 'react';
import Bundle2 from './/pictures/Bundle2.jpg';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default class Bundles2 extends Component {
    render(){
        const renderBundletip = (props) => (
            <Tooltip id="hover-tooltip"{...props}>
             Bundle Size Reference
            </Tooltip>
        );
        return(
            <div className="bundles2">
                <OverlayTrigger
                placement="auto"
                delay={{show:250,hide:400}}
                overlay={renderBundletip}
                >
                    <img alt="bundles2img" src={Bundle2} />
                </OverlayTrigger>
            </div>
        );            
    }
}