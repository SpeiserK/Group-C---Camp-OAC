import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

//const progress = localStorage.getItem("progress");

  const Progress_bar = ({bgcolor,progress,height}) => {

    const progParent = {
      height: height,
      width: '100%',
      backgroundColor: 'whitesmoke',
      borderRadius: 40,
      marginRight: 70,
      marginBottom: 10
    }
    
    const progChild = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: bgcolor,
      borderRadius:40,
      textAlign: 'right'
    }
    
    const progText = {
      padding: 10,
      color: 'white',
      fontWeight: 500,
      textAlign: 'center'
    }
  

    return( 
        <div style={progParent}>
          <div style={progChild}>
            <span style={progText}>
              {`${progress}%`}
            </span>
          </div>
        </div>
      
    );
}

export default Progress_bar;