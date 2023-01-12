import React from 'react';
import axios from 'axios';

export default class LocationLiveDisp extends React.Component {
  state = {
    location: [],
    openStatus: [],
    stock: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/location`)
      .then(res => {
        const locationData = res.data;
        this.setState({ location: locationData });
      });
      this.setState({openStatus: new Array(this.state.location.length).fill(false)});
  }

  locUpdate(id, quant, location) {
    const locationUpdate = {
      _id: 45,
      stock: 34,
      openStatus: 45
  }
  axios.post('http://localhost:5000/send', locationUpdate);
    //post request to http://localhost:5000/send , send location object using location model from backend
  }

  
  render() {
    return (
      <div>
        <button onClick={ () => this.locUpdate()}>lock</button>
        <button>unlock</button>
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
            <span> Location Status </span>
          </td>
          <td id="headerUpdate" className="listHeaderUpdate">
            <span> Location Status </span>
          </td>
        </tr> 
        
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
                <span><input type="number" size="4" defaultValue={`${content.Stock}`}></input></span>&emsp;
              </td>
              <td id="current-orderDate" className ="orderChild">
                <span><button> {content.Open? "OPEN": "CLOSED"} </button></span>&emsp;
              </td>
              <td id="current-orderUpdate" className ="orderChild">
                <span><button> UPDATE </button></span>&emsp;
              </td>        
          </tr>
            )
        }
      </table>
      
      </div>
    )
  }
}