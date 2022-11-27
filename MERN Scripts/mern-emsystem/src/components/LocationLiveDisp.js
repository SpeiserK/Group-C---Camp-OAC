import React from 'react';
import axios from 'axios';

export default class LocationLiveDisp extends React.Component {
  state = {
    orders: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/location`)
      .then(res => {
        const orders = res.data;
        this.setState({ orders });
      })
  }


  
  render() {
    return (
      
      <ul className="dblist">
        <h1> Order history </h1>
        {
          this.state.orders
            .map(content =>
              <li key={content._id}>
                <span>Name: {content.Name}</span>&emsp;
                <span>Address: {content.Address}</span>&emsp;
                <span>Stock: {content.Stock}</span>&emsp;
                
              </li>
            )
        }
      </ul>
    )
  }
}