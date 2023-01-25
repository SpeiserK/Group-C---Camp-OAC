
import React, { useState } from 'react';

const LocationSelect = () => {
  const [selectedLocation, setSelectedLocation] = useState('Select a location');

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
    localStorage.setItem('selectedLocation', event.target.value);
  }

  return (
    
    <select value={selectedLocation} onChange={handleChange}>
      <option value="Rutland" disabled>Select a location</option>
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

/*
import React, { useState, useEffect } from 'react';

const LocationSelect = () => {
  const [selectedLocation, setSelectedLocation] = useState(localStorage.getItem('selectedLocation') || 'Select a location');

  useEffect(() => {
    localStorage.setItem('selectedLocation', selectedLocation);
    if (selectedLocation !== 'Select a location') {
      window.location.reload();
    }
  }, [selectedLocation]);

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  }

  return (
    <select value={selectedLocation} onChange={handleChange} onClick={() => window.location.reload()}>
      <option value="select" disabled>Select a location</option>
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


