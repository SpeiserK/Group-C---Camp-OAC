/*
import React, { useState } from 'react';
import axios from 'axios';


const LocationSelect = () => {

  
  
  
  const [Locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('Select a location');


  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
    sessionStorage.setItem('selectedLocation', event.target.value);
    window.location.reload();
  }
  

  return (
    
    <select value={selectedLocation} onChange={handleChange} >
      <option value="null">Select a location</option>
      <option value="West Kelowna">West Kelowna</option>
      <option value="Rutland">Rutland</option>
      <option value="Mission">Mission</option>
      <option value="Lake Country">Lake Country</option>
      <option value="Glenmore"> Glenmore </option>
      <option value="Kelowna Central"> Kelowna Central </option>
    </select>


 

    
  );
}

export default LocationSelect;
*/
import React from 'react';
import axios from 'axios';

const [Locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('Select a location');


  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
    sessionStorage.setItem('selectedLocation', event.target.value);
    window.location.reload();
  }

export default class LocationLiveDisp extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      location: [],
      openStatus: [],
      stock: [],
      error: []
    }
  }
  //variables to handle state changes
  componentDidMount() {
    axios.get(`http://localhost:5001/location`, { 
      params: {
        Name: this.props.queryLoc
      }
    })
      .then(res => {

        const locationData = res.data;
        this.setState({ location: locationData });

        const cleanStock = locationData.map((item) => item.Stock);
        this.setState({ stock: cleanStock});

        const cleanOpenStatus = locationData.map((item) => item.Open);
        this.setState({ openStatus: cleanOpenStatus});
        
        const cleanErrorMessage = locationData.map(() => "");
        this.setState({ error: cleanErrorMessage});
      });
  }
  

  render() {
    return (
      <div>
               <select value={selectedLocation} onChange={handleChange} >
        {
          this.state.location
            .map((content, index) =>

            
            
            <option value={content.Name} key={content._id} Name={`buttons-${index}`}>{content.Name}</option>
            
         
              
            )
        }
        </select>
      </div>
    )
  }
}


