import React from 'react';
import axios from 'axios';

export default class LocationLiveDisp extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      location: [],
      openStatus: [],
      stock: []
    }
  }
  //variables to handle state changes
  componentDidMount() {
    axios.get(`http://localhost:5000/location`)
      .then(res => {

        const locationData = res.data;
        this.setState({ location: locationData });

        const cleanStock = locationData.map((item) => item.Stock);
        this.setState({ stock: cleanStock});

        const cleanOpenStatus = locationData.map((item) => item.Open);
        this.setState({ openStatus: cleanOpenStatus});
        
        
      });
  }

    //single doc post request
    locUpdate (index, id) {
      axios.post('http://localhost:5000/locupdate', {
        id: id,
        stock: this.state.stock[index],
        open: this.state.openStatus[index]
      })
      .then( response => {
          
      })
    }

    //state change functions
    changeOpenStatus(index) {
      const openStatus = this.state.openStatus;
      this.setState({openStatus: openStatus.map((item, i) => {
        if(this.state.stock[i] <= 0) return false;
        if(i === index) return !item;
        return item;
        
      })});
    }

    changeStock(index, newStock) {
      const stock = this.state.stock;
      this.setState({stock: stock.map((item, i) => {
        if(i === index){
          if(item <= 0) this.changeOpenStatus(index);
          return newStock;
        }
        return item;
      })});
    }
  
  render() {
    return (
      <div>
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
                <span><input type="number" size="4" defaultValue={`${content.Stock}` } onChange={(e) => this.changeStock(index, e.target.value)}>
                </input></span>&emsp;
              </td>
              <td id="current-orderDate" className ="orderChild">
                <span><button onClick={() => this.changeOpenStatus(index)}>
                  {this.state.openStatus[index]? "OPEN": "CLOSED"}
                </button></span>&emsp;
              </td>
              <td id="current-orderUpdate" className ="orderChild">
                <span><button onClick={() => this.locUpdate(index, content._id)}> UPDATE </button></span>&emsp;
              </td>        
          </tr>
            )
        }
      </table>
      </div>
    )
  }
}