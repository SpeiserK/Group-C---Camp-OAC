import React from 'react';
import axios from 'axios';

export default class LocationLiveDisp extends React.Component {
  state = {
    location: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/location`)
      .then(res => {
        const location = res.data;
        this.setState({ location });
      })
  }


  
  render() {
    return (
      <table className="dblist">
        <tr id="listHeader" className="listHeader">
          <td id="headerID"  className="listHeaderItem">
            <span> Location id </span>
          </td>
          <td id="headerName"  className="listHeaderName">
            <span> Name </span>
          </td>
          <td id="headerAddress" className="listHeaderAddress">
            <span> Address </span>
          </td>
          
          <td id="headerStock" className="listHeaderStock">
            <span> Stock </span>
          </td>
          <td id="headerOpen" className="listHeaderOpen">
            <span> Open? </span>
          </td>
        </tr> 
        <h1> Stock by location </h1>
        {
          this.state.location
            .map((content, index) =>
              <tr id="list-locationList" key={content._id} Name={`buttons-${index}`}>  
              <td id="current-locationID" className ="orderChild">
                <span>{content._id}</span>&emsp;
              </td>         
              <td id="current-locationName" className ="orderChild">
                <span>{content.Name}</span>&emsp;
              </td>
              <td id="current-orderAddress" className ="orderChild">
                <span>{content.Address}</span>&emsp;
              </td>
              <td id="current-orderStock" className ="orderChild">
                <span>{content.Stock}</span>&emsp;
              </td>
              <td id="current-orderDate" className ="orderChild">
                <span> {content.Open.toString()} </span>&emsp;
              </td>        
          </tr>
            )
        }
      </table>
    )
  }
}