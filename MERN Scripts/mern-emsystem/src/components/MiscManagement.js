import React from 'react';
import axios from 'axios';


export default class LocationLiveDisp extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      docs: [],
      price: [],
      error: []
    }
  }
  //variables to handle state changes
  componentDidMount() {
    axios.get(`http://localhost:5001/price`)
      .then(res => {

        const docData = res.data;
        this.setState({ docs: docData });

        const prices = docData.map((item) => item.Price);
        this.setState({ price: prices});
        
        const cleanErrorMessage = docData.map(() => "");
        this.setState({ error: cleanErrorMessage});
      });
  }

    //single doc post request
    locUpdate (index, id) {
      axios.post('http://localhost:5001/priceupdate', {
        id: id,
        price: this.state.price[index],
      })
      .then( response => { 
          this.setState({error: this.state.error.map((item, i) => {
            if (i === index)return response.data.message;
            else return "";
          })});
      })
      window.location.reload();
    }

    //state change functions

    changePrice(index, newPrice) {
      const price = this.state.price;
      this.setState({price: price.map((item, i) => {
        if(i === index){
          return newPrice;
        }
        return item;
      })});
    }
  
  render() {
    return (
      
      <div>  
        <p className="robotoSlab">Manage Miscellaneous information</p>    
      <table className="dblist">
        <tr id="listHeader" className="listHeader">
          <td id="headerID"  className="listHeaderItem">
            <span> Document id </span>
          </td>
          <td id="headerName"  className="listHeaderName">
            <span> Price per bundle </span>
          </td>
          <td id="headerAddress" className="listHeaderAddress">
            <span> Update </span>
          </td>
        </tr> 
        
        {
          this.state.docs
            .map((content, index) =>
              <tr id="list-locationList" key={content._id} Name={`buttons-${index}`}>  
              <td id="current-documentID" className ="orderChild">
                <span>{content._id}</span>&emsp;
              </td>
              <td id="current-documentPrice" className ="orderChild">
                <span><input type="number" size="4" defaultValue={`${content.Price}` } onBlur={(e) => this.changePrice(index, e.target.value)}>
                </input></span>&emsp;
              </td>
              <td id="current-orderUpdate" className ="orderChild">
                <span><button className="updateLocButton" onClick={() => this.locUpdate(index, content._id)}> UPDATE </button></span>&emsp;
                {this.state.error[index]}
              </td>
          </tr>
            )
        }
      </table>
      
      </div>
    )
  }
}