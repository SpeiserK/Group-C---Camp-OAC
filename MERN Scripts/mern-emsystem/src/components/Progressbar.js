import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'; 


const progress = localStorage.getItem("progress");

function BasicExample() {
  return <ProgressBar now={60} />;
}

export default BasicExample;