import React from 'react';
import axios from 'axios';



export default class OrderLiveDisp extends React.Component {
  
  state = {
    orders: [],
    color: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/order`)
      .then(res => {
        const orders = res.data;
        this.setState({ orders:orders });
      })
  }

  /*
  onClick (){
    let size = this.state.orders.length;

    let items = new Array(size).fill(true);

    const onClick
    for (let i = 0; i < size; i++){
      
    }
  }
  */



  


  
  render() {
    return (
      
      <ul className="dblist">
        <h1> Order history </h1>
        {
          this.state.orders
            .map(content =>
              
              <li key={content._id}>
                <div className="orderList" id = {content._id}>
                  <div className ="orderChild">
                    <span>Email: {content.Name}</span>&emsp;
                    <span>Quantity Ordered: {content.Quantity}</span>&emsp;
                    <span>Location: {content.Location}</span>&emsp;
                  </div>
                  <div className ="orderChild"> 

                    <button onClick={() => {
                      
                      this.setState({ color: "Approved" })}}
                      > Approve </button>
                    <button onClick={() => this.setState({ color: "Denied" })}> Deny </button>
                    <p> {this.state.color}</p>
                  </div>
                </div>
                
              </li>
              
            )
        }
      </ul>
    )

  }

}