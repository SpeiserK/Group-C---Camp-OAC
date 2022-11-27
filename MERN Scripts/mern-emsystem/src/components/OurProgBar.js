import React, { Component } from 'react';

//const progress = localStorage.getItem("progress");

  const Progress_bar = ({bgcolor,progress,height}) => {

    const progParent = {
      height: height,
      width: '100%',
      backgroundColor: 'whitesmoke',
      borderRadius: 40,
      marginRight: 74,
      marginTop: -10,
      marginBottom: 30
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
              
            </span>
          </div>
        </div>
      
    );
}

export default Progress_bar;