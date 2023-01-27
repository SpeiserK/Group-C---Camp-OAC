
import React, { useState } from 'react';

const LocationSelect = () => {
  const [selectedLocation, setSelectedLocation] = useState('Select a location');

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
    localStorage.setItem('selectedLocation', event.target.value);
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

