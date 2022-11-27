import React from 'react';
import axios from 'axios';

export default class OrderLiveDisp extends React.Component {
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
                <div className="orderList">
                  <div className ="orderChild">
                    <span>Email: {content.Name}</span>&emsp;
                    <span>Quantity Ordered: {content.Quantity}</span>&emsp;
                    <span>Location: {content.Location}</span>&emsp;
                  </div>
                  <div className ="orderChild"> 
                    <button> test </button>
                    <button> test2 </button>
                  </div>
                </div>
                
              </li>
              
            )
        }
      </ul>
    )
  }
}