import React, { useState } from 'react';
import axios from 'axios';


  const handleChange = (event) => {
    //setSelectedLocation(event.target.value);
    sessionStorage.setItem('selectedLocation', event.target.value);
    window.location.reload();
  }

export default class LocationSelect extends React.Component {

    

  constructor(props){
    super(props);
      this.state = {
      location: [],
      openStatus: [],
      stock: [],
      error: []
    }
  }
  //loads the db values
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
         {/*This select function uses the map function to map all locations */}
        <select value={sessionStorage.getItem('selectedLocation')} onChange={handleChange} >
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