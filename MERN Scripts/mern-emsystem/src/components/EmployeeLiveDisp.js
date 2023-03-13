import React from 'react';
import axios from 'axios';

export default class LocationLiveDisp extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      location: [],
      error: ""
    }
  }
  //variables to handle state changes
  componentDidMount() {
    axios.get(`http://localhost:5001/employee`)
      .then(res => {
        const locationData = res.data;
        this.setState({ location: locationData });
      });
  }

    //single doc post request
    deleteUser(id, UserName) {
      const confirmDelete = window.confirm(`Are you sure you want to delete ${UserName}?`);
      if (confirmDelete) {
      axios.post('http://localhost:5001/deleteuser', {
        id: id
      })
      .then( response => {
          this.setState({ error: response.message})
      })
      window.location.reload();
    }
  }
  
  render() {
    return (
      <div>
      <table className="dblist">
        
        <tr id="listHeader" className="listHeader">
          <td id="headerID"  className="listHeaderItem">
            <span> Employee ID </span>
          </td>
          <td id="headerName"  className="listHeaderName">
            <span> Employee UserName </span>
          </td>
          <td id="headerAddress" className="listHeaderAddress">
            <span> Associated Email Address </span>
          </td>
          <td id="headerLocation" className="listHeaderLocation">
            <span> Location/Access Restriction</span>
          </td>
          <td id="headerRemove" className="listHeaderRemove">
            <span> Delete User </span>
          </td>
        </tr> 
        
        {
          this.state.location
            .map((content, index) =>
              <tr id="list-locationList" key={content._id} Name={`buttons-${index}`}>  
              <td id="current-empID" className ="orderChild">
                <span>{content._id}</span>&emsp;
              </td>
              <td id="current-empName" className ="orderChild">
                <span>{content.Username}</span>&emsp;
              </td>
              <td id="current-empEmail" className ="orderChild">
                <span>{content.Email}</span>&emsp;
              </td>
              <td id="current-empAccess" className ="orderChild">
                <span>{content.Location}</span>&emsp;
              </td>
              <td id="current-orderUpdate" className ="orderChild">
                <span><button onClick={() => this.deleteUser(content._id,content.Username)}>DELETE</button></span>&emsp;
              </td> 
          </tr>
            )
        }
      </table>
      {this.state.error && <div>{this.state.error}</div>}
      </div>
    )
  }
}