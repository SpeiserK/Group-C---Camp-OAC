import React from 'react';
import axios from 'axios';

export default class OrderDispHist extends React.Component {
  state = {
    orders: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/order`)
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
                <span>Email: {content.Name}</span>&emsp;
                <span>Quantity Ordered: {content.Quantity}</span>&emsp;
                <span>Location: {content.Location}</span>&emsp;
                <span>Date/Time: {content.Datetime}</span>&emsp;
                <span>Price: ${content.Price}</span>&emsp;
                <span>Payment: {content.Payment}</span>&emsp;
                <span>Status: {content.Status}</span>&emsp;
                <span>Picked up: {content.Pickup}</span>&emsp;
              </li>
            )
        }
      </ul>
    )
  }
}